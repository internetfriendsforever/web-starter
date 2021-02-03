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
    main: html`
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
