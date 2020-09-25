const locales = require('../data/locales.json')

module.exports = function (object, locale) {
  return object[process.env.lang] ||
    object[locales.find(locale => locale.lang in object).lang]
}
