const localize = require('../utils/localize')

module.exports = {
  eleventyComputed: {
    navigation: data => ({
      ...data.navigation,

      // Overwrite locale navigation with paths to page in other locales
      locales: data.navigation.locales.map(item => {
        const path = item.path + localize(data.navigation.pages.about.path, item.locale)
        return { ...item, path }
      })
    })
  }
}
