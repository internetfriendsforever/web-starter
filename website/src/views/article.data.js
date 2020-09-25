module.exports = {
  eleventyComputed: {
    navigation: data => {
      // Find the article which is currently being rendered
      const slug = data.page.url.split('/').filter(Boolean)[0]
      const article = data.articles.find(article => article.slug.local === slug)

      return {
        ...data.navigation,

        // Overwrite locale navigation with paths to page in other locales
        locales: data.navigation.locales.map(item => {
          const lang = item.locale.lang
          const path = `/${lang}/${article.slug[lang]}/`
          return { ...item, path }
        })
      }
    }
  }
}
