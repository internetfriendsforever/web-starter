const html = require('../utils/html')
const sanity = require('../utils/sanity')
const layout = require('../partials/layout')
const articlesModel = require('../models/articles')

module.exports = article => layout({
  title: article.title,
  content: html`
    <main class="text-wrapper">
      <a href="/">Back to home</a>
      <h1>${article.title}</h1>

      ${article.image && html`
        <img src="${sanity.image(article.image)}" />
      `}

      ${article.body && sanity.html(article.body)}
    </main>
  `
})

module.exports.variants = () => articlesModel.getAll()

module.exports.file = article => (
  `articles/${article._id}.html`
)
