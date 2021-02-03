const path = require('path')
const pretty = require('pretty')
const glob = require('glob')

module.exports = async () => {
  const files = {}

  const folder = path.join(__dirname, 'pages')
  const pages = glob.sync('**/*.js', { cwd: folder })

  for (const file of pages) {
    const name = path.join(
      path.dirname(file),
      path.basename(file, path.extname(file))
    )

    const page = require(path.join(folder, file))
    const body = page()

    files[name + '.html'] = body
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
