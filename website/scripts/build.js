import path from 'path'
import write from '../utils/write.js'
import logger from '../utils/logger.js'

logger.info('Build started')

const startTime = Date.now()

const root = new URL('..', import.meta.url).pathname
const src = path.join(root, 'src')
const dist = path.join(root, 'dist')

try {
  const render = await import(path.join(src, 'render.js'))
  const files = await render.default()

  await write(dist, files)

  const count = Object.keys(files).length
  const elapsed = Date.now() - startTime

  logger.info(`Built ${count} pages in ${elapsed}ms`)
} catch (error) {
  logger.error(error.toString())
  console.error(error)
  process.exit(1)
}
