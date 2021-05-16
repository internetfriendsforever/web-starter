const html = require('../utils/html')
const sanity = require('../utils/sanity')
const layout = require('../partials/layout')

module.exports = async () => {
  const articles = await sanity.fetch(`
    *[_type == "article"]{
      _id,
      title
    }
  `)

  return layout({
    title: 'Home',
    content: html`
      <h1>Hello World!</h1>

      <ul>
        <li>
          <a href="/custom">Custom page</a>
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
