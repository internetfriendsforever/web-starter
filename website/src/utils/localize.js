const Intl = require('intl')
const lang = require('../data/lang')
const locales = require('../data/locales')

// Localize object
module.exports.object = (object, locale) => {
  const direct = object[locale ? locale.lang : lang]
  const fallbackLocale = locales.find(locale => locale.lang in object)
  const fallback = fallbackLocale ? object[fallbackLocale.lang] : null
  const local = direct || fallback || null
  return { ...object, local }
}

// Localize Date object
module.exports.date = function (date, format, locale) {
  return new Intl.DateTimeFormat(locale ? locale.lang : lang, format).format(date)
}
