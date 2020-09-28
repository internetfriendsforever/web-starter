const locales = require('../../locales')

export function localize (object) {
  const locale = locales.find(locale => (
    object.hasOwnProperty(locale.lang)
  ))

  if (locale) {
    return object[locale.lang]
  }

  return null
}

export default {
  locales,
  localize
}
