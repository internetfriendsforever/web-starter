import * as fs from 'fs'
import render from '../src/render.js'

const args = process.argv.slice(2)
const pattern = new RegExp(args[0] || '^index\\.html$')
const fd3 = fs.createWriteStream(null, { fd: 3 })

try {
  const result = await render(pattern)

  if (result) {
    const { match, body } = result

    fd3.write(match)
    fd3.write(body)
  }
} catch (error) {
  console.error(error)
}
