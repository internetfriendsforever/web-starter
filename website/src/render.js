const fs = require('fs')
const path = require('path')
const pretty = require('pretty')
const glob = require('glob')
const Mustache = require('mustache')

module.exports = async () => {
  const files = {}

  const folder = path.join(__dirname, 'pages')
  const templates = glob.sync('**/*.mustache', { cwd: folder })

  for (const template of templates) {
    // Strip template extension
    const name = path.basename(template, path.extname(template))

    // Get data if template module exists
    const script = requireIfExists(path.join(folder, name))
    const data = script ? await script() : {}

    // Render template
    const source = fs.readFileSync(path.join(folder, template), 'utf-8')
    const output = Mustache.render(source, data)
    const outputName = name + '.html'

    files[outputName] = output
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

function requireIfExists (path) {
  const resolved = resolveIfExists(path)

  if (resolved) {
    return require(resolved)
  }

  return null
}

function resolveIfExists (path) {
  try {
    return require.resolve(path)
  } catch (error) {
    return null
  }
}
