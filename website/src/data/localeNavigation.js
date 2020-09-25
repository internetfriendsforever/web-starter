const lang = require('./lang')
const locales = require('./locales.json')

module.exports = locales.map(locale => ({
  current: lang === locale.lang,
  path: `/${locale.lang}`,
  locale
}))
