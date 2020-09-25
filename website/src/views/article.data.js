module.exports = {
  eleventyComputed: {
    localeNavigation: data => {
      // Find the article which is currently being rendered
      const article = data.articles.find(article => `/${article.slug}/` === data.page.url)

      // Overwrite localeNavigation with paths to that article in other locales
      return data.localeNavigation.map(item => {
        const lang = item.locale.lang
        const path = `/${lang}/${article.slug[lang]}/`
        return { ...item, path }
      })
    }
  }
}
