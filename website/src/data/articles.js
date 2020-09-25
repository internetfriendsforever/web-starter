const localize = require('../utils/localize')

module.exports = async () => {
  // This could be fetched from Sanity
  const articles = [
    {
      title: {
        en: 'First article',
        de: 'Erste Artikel',
        nb: 'Første artikkel'
      },
      slug: {
        en: 'first-article',
        de: 'erste-artikel',
        nb: 'forste-artikkel'
      },
      introduction: {
        en: 'This is an introduction',
        de: 'Dies ist eine Einführung',
        nb: 'Dette er en introduksjon'
      }
    }, {
      title: {
        en: 'Second article',
        de: 'Zweiter Artikel',
        nb: 'Andre artikkel'
      },
      slug: {
        en: 'second-article',
        de: 'zweiter-artikel',
        nb: 'andre-artikkel'
      },
      introduction: {
        en: 'This is an introduction',
        de: 'Dies ist eine Einführung',
        nb: 'Dette er en introduksjon'
      }
    }
  ]

  return articles.map(article => ({
    title: localize(article.title),
    slug: localize(article.slug),
    introduction: localize(article.introduction)
  }))
}
