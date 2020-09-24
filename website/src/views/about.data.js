const localize = require('../utils/localize')
const locales = require('../data/locales.json')
const strings = require('../data/strings.json')
const navigation = require('../data/navigation.json')

module.exports = async () => {
  const contents = locales.map(locale => {
    const navigationItem = navigation.find(item => item.id === 'about')
    const pagePath = localize(navigationItem.path, locale)

    return {
      path: `${locale.lang}/${pagePath}/index.html`,
      about: localize(strings.about, locale)
    }
  })

  return {
    contents
  }
}
