const html = require('../utils/html')
const sanity = require('../utils/sanity')
const layout = require('../partials/layout')
const articlesModel = require('../models/articles')

module.exports = article => layout({
  title: article.title,
  activePath: `articles/${article._id}`,
  content: html`
    <article class="stack">
      <nav class="nav-breadcrumbs">
        <a href="/">Back to home</a>
      </nav>

      <h1>${article.title}</h1>

      ${article.image && html`
        <img src="${sanity.image(article.image)}" />
      `}

      ${article.body && sanity.html(article.body)}
    </article>
  `
})

module.exports.variants = () => articlesModel.getAll()

module.exports.file = article => (
  `articles/${article._id}.html`
)
