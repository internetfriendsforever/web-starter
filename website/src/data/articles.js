const sanity = require('../utils/sanity')
const localize = require('../utils/localize')

module.exports = async () => {
  const articles = await sanity.fetch(`
    *[_type == "article"]{
      "title": {
        "en": "First article",
        "de": "Erste Artikel",
        "nb": "Første artikkel"
      },
      "slug": {
        "en": "first-article",
        "de": "erste-artikel",
        "nb": "forste-artikkel"
      },
      "introduction": {
        "en": "This is an introduction",
        "de": "Dies ist eine Einführung",
        "nb": "Dette er en introduksjon"
      }
    }
  `)

  return articles.map(article => ({
    title: localize(article.title),
    slug: localize(article.slug),
    introduction: localize(article.introduction)
  }))
}
