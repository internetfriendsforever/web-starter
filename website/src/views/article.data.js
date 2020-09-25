module.exports = {
  eleventyComputed: {
    navigation: data => {
      const slug = data.page.url.split('/').filter(Boolean)[0]
      const article = data.articles.find(article => article.slug.local === slug)

      return {
        ...data.navigation,

        locales: data.navigation.locales.map(item => {
          const lang = item.locale.lang
          const slug = article.slug[lang]
          const path = slug ? `/${lang}/${slug}/` : item.path
          return { ...item, path }
        }).filter(Boolean)
      }
    }
  }
}
