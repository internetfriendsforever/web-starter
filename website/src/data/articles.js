const sanity = require('../utils/sanity')

module.exports = async () => {
  const articles = await sanity.fetch(`
    *[_type == "article"]{
      title,
      image,
      body,
      _updatedAt,
      "introduction": {
        "en": "This is an introduction",
        "de": "Dies ist eine Einführung",
        "nb": "Dette er en introduksjon"
      }
    }
  `)

  articles.forEach(article => {
    if (article.image && article.image.asset) {
      article.imageUrl = sanity.image(article.image).width(200).auto('format')
    }

    if (article.body) {
      article.bodyHtml = sanity.html(article.body)
    }
  })

  return articles
}
