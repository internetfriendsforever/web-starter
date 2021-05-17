const html = require('../utils/html')
const layout = require('../partials/layout')
const demoGrid = require('../partials/demoGrid')
const articlesModel = require('../models/articles')

module.exports = async () => {
  const articles = await articlesModel.getAll()

  return layout({
    title: 'Home',
    slug: '/',
    content: html`
      <h1>Cyberspace Industries</h1>

      <h2>Web starter</h2>

      <ul>
        <li>
          <a href="/custom">Custom route</a>
        </li>
        <li>
          <a href="/file.json">Custom file route</a>
        </li>
        <li>
          <a href="/context">Context object</a>
        </li>
      </ul>

      <h2>Articles</h2>
      <ul>
        ${articles.map(article => html`
          <li>
            <a href="${article.url}">
              ${article.title}
            </a>
          </li>
        `)}
      </ul>

      <h2>Layout</h2>
      ${demoGrid()}
    `
  })
}
