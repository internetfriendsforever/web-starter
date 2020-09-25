const localize = require('../utils/localize')

module.exports = {
  eleventyComputed: {
    localeNavigation: data => {
      // Overwrite localeNavigation with paths to about page in other locales
      return data.localeNavigation.map(item => {
        const path = item.path + localize(data.pageNavigation.about.path, item.locale)
        return { ...item, path }
      })
    }
  }
}
