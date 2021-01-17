const fs = require('fs')
const path = require('path')
const Mustache = require('mustache')

const src = path.join(__dirname, '..')
const templatesDir = path.join(src, 'templates')
const templates = {}

fs.readdirSync(templatesDir).forEach(file => {
  const name = path.basename(file, path.extname(file))
  templates[name] = fs.readFileSync(path.join(templatesDir, file), 'utf-8')
})

const filters = {
  join: function () {
    return function (text, render) {
      return render(text).replace(/\s+/gi, ' ').trim()
    }
  }
}

module.exports = function (name, data) {
  return Mustache.render(templates[name], {
    ...filters,
    ...data
  }, templates)
}
