const sanity = require('../utils/sanity')
const localize = require('../utils/localize')
const locales = require('../data/locales.json')
const strings = require('../data/strings.json')

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
      }
    }
  `)

  const contents = locales.map(locale => ({
    path: `${locale.lang}/index.html`,
    hello: localize(strings.hello, locale),
    articles: articles.map(article => ({
      title: localize(article.title, locale),
      path: `/${locale.lang}/${localize(article.slug, locale)}`
    }))
  }))

  return {
    contents
  }
}
