const path = require('path')
const pretty = require('pretty')
const glob = require('glob')
const logger = require('../utils/logger')

module.exports = async () => {
  const files = {}

  const folder = path.join(__dirname, 'pages')
  const pages = glob.sync('**/*.js', { cwd: folder })

  // Build pages in parallell
  await Promise.all(pages.map(async file => {
    const page = require(path.join(folder, file))

    if (typeof page !== 'function') {
      return logger.warn(`Page ${file} does not export a method`)
    }

    if (typeof page.variants === 'function') {
      if (typeof page.file !== 'function') {
        return logger.warn(`Page ${file} exports variants, but no file method`)
      }

      const variants = await page.variants()

      if (!Array.isArray(variants)) {
        return logger.warn(`Page ${file} variants method should return an array`)
      }

      for (const variant of variants) {
        files[await page.file(variant)] = await page(variant)
      }
    } else {
      let filename = path.join(
        path.dirname(file),
        path.basename(file, path.extname(file))
      ) + '.html'

      if (typeof page.file === 'function') {
        filename = await page.file()
      }

      files[filename] = await page()
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
