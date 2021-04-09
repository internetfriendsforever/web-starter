const html = require('../utils/html')
const layout = require('../partials/layout')
const articlesModel = require('../models/articles')

module.exports = async () => {
  const articles = await articlesModel.getAll()

  return layout({
    title: 'Home',
    content: html`
      <h1>Hello World!</h1>

      <ul>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>

      <ul>
        ${articles.map(article => html`
          <li>
            <a href="/articles/${article._id}">
              ${article.title}
            </a>
          </li>
        `)}
      </ul>
    `
  })
}
