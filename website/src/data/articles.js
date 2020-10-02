const localize = require('../utils/localize')
const sanity = require('../utils/sanity')

module.exports = async () => {
  const articles = await sanity.fetch(`
    *[_type == "article"]{
      _updatedAt,
      title,
      slug,
      image,
      body
    }
  `)

  return articles.map(article => ({
    updated: localize.date(Date.parse(article._updatedAt), {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }),
    title: localize.object(article.title),
    slug: localize.object(article.slug),
    body: localize.object(article.body),
    imageUrl: sanity.image(article.image).width(2000).fit('max').auto('format').url(),
    bodyHtml: sanity.html(localize.object(article.body).local)
  }))
}
