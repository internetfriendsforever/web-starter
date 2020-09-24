const sanity = require('../utils/sanity')
const localize = require('../utils/localize')
const locales = require('../data/locales.json')

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

  const contents = locales.flatMap(locale => (
    articles.map(article => ({
      path: `/${locale.lang}/${localize(article.slug, locale)}/index.html`,
      article: {
        title: localize(article.title, locale),
        introduction: localize(article.introduction, locale)
      }
    }))
  ))

  return {
    contents
  }
}
