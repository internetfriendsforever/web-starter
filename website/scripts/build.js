import path from 'path'
import write from '../utils/write.js'
import logger from '../utils/logger.js'

logger.info('Build started')

const startTime = Date.now()

const projectFolder = new URL(path.join(path.dirname(import.meta.url), '..')).pathname

build(projectFolder).catch(error => {
  logger.error(error.toString())
  console.error(error)
  process.exit(1)
})

async function build (project) {
  const dist = path.join(project, 'dist')
  const src = path.join(project, 'src')
  const render = await import(path.join(src, 'render.js'))
  const files = await render.default()

  await write(dist, files)

  const count = Object.keys(files).length
  const elapsed = Date.now() - startTime

  logger.info(`Built ${count} pages in ${elapsed}ms`)
}
