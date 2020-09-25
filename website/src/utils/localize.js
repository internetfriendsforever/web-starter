const lang = require('../data/lang')
const locales = require('../data/locales.json')

module.exports = function (object, locale) {
  let local = object[locale ? locale.lang : lang]

  // Fallback to first translation prioritized by locales.json
  if (!local) {
    local = object[locales.find(locale => locale.lang in object).lang]
  }

  return {
    ...object,
    local,
    toString: () => local
  }
}
