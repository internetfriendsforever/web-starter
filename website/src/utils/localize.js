const lang = require('../data/lang')
const locales = require('../data/locales.json')

module.exports = function (object) {
  const local = object[lang] ||
      object[locales.find(locale => locale.lang in object).lang]

  return {
    ...object,
    local,
    toString: () => local
  }
}
