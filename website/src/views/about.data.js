module.exports = {
  eleventyComputed: {
    navigation: data => ({
      ...data.navigation,

      locales: data.navigation.locales.map(item => {
        const lang = item.locale.lang
        const pagePath = data.navigation.pages.about.path[lang]
        const path = pagePath ? `/${item.locale.lang}/${pagePath}` : item.path
        return { ...item, path }
      })
    })
  }
}
