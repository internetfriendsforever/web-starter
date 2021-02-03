const html = require('../utils/html')
const sanity = require('../utils/sanity')
const layout = require('../partials/layout')

module.exports = article => layout({
  title: article.title,
  content: html`
    <a href="/">Back to home</a>
    <h1>${article.title}</h1>
  `
})

module.exports.variants = () => sanity.fetch(`
  *[_type == "article"]{
    _id,
    title
  }
`)

module.exports.file = article => (
  `articles/${article._id}.html`
)
