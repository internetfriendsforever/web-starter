const lang = require('../data/lang')
const locales = require('../data/locales')

module.exports = (object, locale) => ({
  ...object,
  local: (
    object[locale ? locale.lang : lang] ||
    object[locales.find(locale => locale.lang in object).lang]
  )
})
