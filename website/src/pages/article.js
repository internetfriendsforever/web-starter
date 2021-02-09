const html = require('../utils/html')
const sanity = require('../utils/sanity')
const layout = require('../partials/layout')

module.exports = article => layout({
  title: article.title,
  content: html`
    <a href="/">Back to home</a>
    <h1>${article.title}</h1>

    ${article.image && html`
      <img src="${sanity.image(article.image)}" />
    `}

    ${article.body && sanity.html(article.body)}
  `
})

module.exports.variants = () => sanity.fetch(`
  *[_type == "article"]{
    _id,
    title,
    image,
    body
  }
`)

module.exports.file = article => (
  `articles/${article._id}.html`
)
