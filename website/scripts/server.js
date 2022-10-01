import * as path from 'path'
import express from 'express'
import mime from 'mime-types'
import { spawn } from 'child_process'

const app = express()
const port = 3000

app.use('/assets', express.static(new URL('../src/assets', import.meta.url).pathname))

app.get('*', (req, res) => {
  const { name, ext } = path.parse(req.url)

  const options = [req.url]

  if (!ext) {
    options.push(path.join(req.url, 'index.html'))

    if (name && !req.url.endsWith('/')) {
      options.push(path.normalize(req.url) + '.html')
    }
  }

  const pattern = '^/?(' + options
    .map(option => option.replace(/^\//, ''))
    .map(escapeStringForRegExp)
    .join('|') + ')$'

  const render = spawn('node', [
    '--experimental-json-modules',
    '--no-warnings',
    'render-pattern.js',
    pattern
  ], {
    stdio: ['ignore', 'pipe', 'pipe', 'pipe'],
    cwd: new URL('./', import.meta.url).pathname
  })

  const fd3 = render.stdio[3]

  fd3.once('data', data => {
    const filename = data.toString().trim()

    res.status(200)

    const type = mime.lookup(filename)

    if (type) {
      res.set('Content-Type', type)
    }

    fd3.on('data', body => {
      res.write(body)
    })
  })

  render.stdout.on('data', data => {
    process.stdout.write(`${req.url}: ${data}`)
  })

  render.stderr.on('data', data => {
    process.stderr.write(`${req.url}: ${data}`)
  })

  render.on('close', (code) => {
    if (!res.headersSent) {
      res.status(404)
    }

    res.end()
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function escapeStringForRegExp (string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
