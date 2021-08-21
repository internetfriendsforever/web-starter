import html from '../utils/html.js'
import sanity from '../utils/sanity.js'
import layout from '../partials/layout.js'
import sections from '../partials/sections.js'

export function variants () {
  return sanity.fetch(`
    *[_type == "page"]{
      _id,
      slug,
      title,
      sections
    }
  `)
}

export function file (variant) {
  return `${variant.slug.current}.html`
}

export function render (variant, context) {
  return layout({
    title: variant.title,
    content: html`
      <main>
        <header class="page-header">
          <a href="/">Back to home</a>
          <h1 class="text-block-heading">${variant.title}</h1>
        </header>

        ${sections(variant.sections, context)}
      </main>
    `
  })
}
