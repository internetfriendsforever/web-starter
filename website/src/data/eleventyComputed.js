module.exports = {
  navigation: data => {
    return {
      ...data.navigation,

      // Add current flag to current page
      pages: {
        ...data.navigation.pages,
        list: data.navigation.pages.list.map(item => {
          const current = item.path.local === data.page.url
          return { ...item, current }
        })
      },

      // Map pages to different locales
      locales: data.navigation.locales.map(item => {
        const lang = item.locale.lang
        const pageItem = data.navigation.pages.list.find(p => p.path.local === data.page.url)
        const pageLocalePath = pageItem.path[lang]
        const alternate = !!pageLocalePath
        const path = alternate ? `/${lang}${pageLocalePath}` : item.path
        return { ...item, path, alternate }
      })
    }
  }
}
