const Intl = require('intl')
const lang = require('../data/lang')
const locales = require('../data/locales')

// Localize object
module.exports.object = (object, locale) => ({
  ...object,
  local: (
    object[locale ? locale.lang : lang] ||
    object[locales.find(locale => locale.lang in object).lang]
  )
})

// Localize Date object
module.exports.date = function (date, format, locale) {
  return new Intl.DateTimeFormat(locale ? locale.lang : lang, format).format(date)
}
