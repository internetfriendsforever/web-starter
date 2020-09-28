const localize = require('../utils/localize')
const sanity = require('../utils/sanity')

module.exports = async () => {
  const articles = await sanity.fetch(`
    *[_type == "article"]{
      title,
      slug,
      image,
      body
    }
  `)

  return articles.map(article => ({
    title: localize(article.title),
    slug: localize(article.slug),
    body: localize(article.body),
    imageUrl: sanity.image(article.image).width(2000).fit('max').auto('format').url(),
    bodyHtml: sanity.html(localize(article.body).local)
  }))
}
