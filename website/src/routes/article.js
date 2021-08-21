import html from '../utils/html.js'
import sanity from '../utils/sanity.js'
import layout from '../partials/layout.js'
import * as articlesModel from '../models/articles.js'

export function variants () {
  return articlesModel.getAll()
}

export function file (variant) {
  return `articles/${variant._id}.html`
}

export function render (variant) {
  return layout({
    title: variant.title,
    content: html`
      <main class="text-wrapper">
        <a href="/">Back to home</a>
        <h1 class="text-block-heading">${variant.title}</h1>

        ${variant.image && html`
          <img src="${sanity.image(variant.image)}" />
        `}

        ${variant.body && sanity.html(variant.body)}
      </main>
    `
  })
}
