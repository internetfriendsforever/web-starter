const fs = require('fs')
const path = require('path')
const Mustache = require('mustache')

const src = path.join(__dirname, '..')
const templates = path.join(src, 'templates')
// const partials = path.join(src, 'partials')

module.exports = function (templateName, data) {
  const templatePath = path.join(templates, `${templateName}.mustache`)
  const template = fs.readFileSync(templatePath, 'utf-8')
  return Mustache.render(template, data)
}
