const lang = require('../lang')
const locales = require('../locales')

module.exports = locales.map(locale => ({
  current: lang === locale.lang,
  path: `/${locale.lang}`,
  locale
}))
