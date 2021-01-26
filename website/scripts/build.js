const path = require('path')
const write = require('../utils/write')
const logger = require('../utils/logger')

logger.info('Build started')

const startTime = Date.now()

build(path.join(__dirname, '..')).catch(error => {
  logger.error(error.toString())
  console.error(error)
  process.exit(1)
})

async function build (project) {
  const dist = path.join(project, 'dist')
  const src = path.join(project, 'src')
  const render = require(path.join(src, 'render'))
  const files = await render()

  await write(dist, files)

  const count = Object.keys(files).length
  const elapsed = Date.now() - startTime

  logger.info(`Built ${count} pages in ${elapsed}ms`)
}
