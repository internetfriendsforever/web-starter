const path = require('path')
const pretty = require('pretty')
const glob = require('glob')
const logger = require('../utils/logger')

module.exports = async () => {
  const files = {}
  const variants = {}

  const folder = path.join(__dirname, 'routes')
  const routes = glob.sync('**/*.js', { cwd: folder })

  // Get route variants
  await Promise.all(routes.map(async file => {
    const route = require(path.join(folder, file))

    if (typeof route.variants === 'function') {
      variants[file] = await route.variants()

      if (!Array.isArray(variants[file])) {
        return logger.warn(`Route ${file} variants method should return an array`)
      }
    }
  }))

  const context = {
    variants: Object.values(variants).flat()
  }

  // Build routes in parallell
  await Promise.all(routes.map(async file => {
    const route = require(path.join(folder, file))

    if (typeof route !== 'function') {
      return logger.warn(`Route ${file} does not export a method`)
    }

    if (file in variants) {
      if (typeof route.file !== 'function') {
        return logger.warn(`Route ${file} exports variants, but no file method`)
      }

      for (const variant of variants[file]) {
        files[await route.file(variant)] = await route(variant, context)
      }
    } else {
      let filename = path.join(
        path.dirname(file),
        path.basename(file, path.extname(file))
      ) + '.html'

      if (typeof route.file === 'function') {
        filename = await route.file()
      }

      files[filename] = await route(context)
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
