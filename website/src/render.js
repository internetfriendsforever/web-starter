const path = require('path')
const pretty = require('pretty')
const glob = require('glob')

module.exports = async () => {
  const files = {}

  const folder = path.join(__dirname, 'pages')
  const pages = glob.sync('**/*.js', { cwd: folder })

  // TODO: Render each page in parallell
  // Don't await for each variants and urls
  for (const file of pages) {
    const page = require(path.join(folder, file))

    // TODO: Warn if variants is set but not url?
    if (page.variants && page.url) {
      const variants = await page.variants()

      for (const variant of variants) {
        const filename = (await page.url(variant)) + '.html'
        files[filename] = page(variant)
      }
    } else {
      const filename = (page.url
        ? await page.url()
        : path.join(
          path.dirname(file),
          path.basename(file, path.extname(file))
        )
      ) + '.html'

      files[filename] = page()
    }
  }

  // Render in parallell
  const promises = Object.values(files)
  const values = await Promise.all(promises)

  Object.keys(files).forEach((key, i) => {
    files[key] = values[i]
  })

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
