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
  const files = await (require(path.join(src, 'render')))()
  const keys = Object.keys(files)

  await keys.map(file => {
    const body = files[file]
    return write(dist, file, body)
  })

  const elapsed = Date.now() - startTime

  logger.info(`Built ${keys.length} pages in ${elapsed}ms`)
}
