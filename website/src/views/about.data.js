module.exports = {
  eleventyComputed: {
    localeNavigation: data => {
      // Overwrite localeNavigation with paths to about page in other locales
      return data.localeNavigation.map(item => {
        const lang = item.locale.lang
        const path = `/${lang}${data.pageNavigation.about.path[lang]}`
        return { ...item, path }
      })
    }
  }
}
