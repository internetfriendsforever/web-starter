import html from '../utils/html.js'
import layout from '../partials/layout.js'
import * as articlesModel from '../models/articles.js'

export default async function () {
  const articles = await articlesModel.getAll()

  return layout({
    title: 'Home',
    content: html`
      <main class="text-wrapper">
        <h1 class="text-block-heading">Hello World!</h1>

        <ul>
          <li>
            <a href="/primitives">Primitives</a>
          </li>
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

        <ul>
          ${articles.map(article => html`
            <li>
              <a href="${article.url}">
                ${article.title}
              </a>
            </li>
          `)}
        </ul>
      </main>
    `
  })
}
