import html from '../utils/html.js'
import sanity from '../utils/sanity.js'
import layout from '../partials/layout.js'
import articlesModel from '../models/articles.js'

export default article => layout({
  title: article.title,
  content: html`
    <main class="text-wrapper">
      <a href="/">Back to home</a>
      <h1 class="text-block-heading">${article.title}</h1>

      ${article.image && html`
        <img src="${sanity.image(article.image)}" />
      `}

      ${article.body && sanity.html(article.body)}
    </main>
  `
})

export const variants = () => articlesModel.getAll()

export const file = article => (
  `articles/${article._id}.html`
)
