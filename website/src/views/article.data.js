module.exports = {
  eleventyComputed: {
    navigation: data => {
      // Map article to different locales
      const slug = data.page.url.split('/').filter(Boolean)[0]
      const article = data.articles.find(article => {
        return article.slug.local.current === slug
      })

      return {
        ...data.navigation,

        locales: data.navigation.locales.map(item => {
          const lang = item.locale.lang
          const slug = article.slug[lang]
          const alternate = !!slug
          const path = alternate ? `/${lang}/${slug.current}/` : item.path
          return { ...item, path, alternate }
        }).filter(Boolean)
      }
    }
  }
}
