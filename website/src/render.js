const path = require('path')
const pretty = require('pretty')
const glob = require('glob')
const logger = require('../utils/logger')

module.exports = async () => {
  const files = {}

  const folder = path.join(__dirname, 'routes')
  const routes = glob.sync('**/*.js', { cwd: folder })

  // Build routes in parallell
  await Promise.all(routes.map(async file => {
    const route = require(path.join(folder, file))

    if (typeof route !== 'function') {
      return logger.warn(`Route ${file} does not export a method`)
    }

    if (typeof route.variants === 'function') {
      if (typeof route.file !== 'function') {
        return logger.warn(`Route ${file} exports variants, but no file method`)
      }

      const variants = await route.variants()

      if (!Array.isArray(variants)) {
        return logger.warn(`Route ${file} variants method should return an array`)
      }

      for (const variant of variants) {
        files[await route.file(variant)] = await route(variant)
      }
    } else {
      let filename = path.join(
        path.dirname(file),
        path.basename(file, path.extname(file))
      ) + '.html'

      if (typeof route.file === 'function') {
        filename = await route.file()
      }

      files[filename] = await route()
    }
  }))

  // Make html pretty
  for (const key in files) {
    if (key.endsWith('.html')) {
      files[key] = pretty(files[key], {
        ocd: true
      })
    }
  }

  return files
}
