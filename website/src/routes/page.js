import html from '../utils/html.js'
import sanity from '../utils/sanity.js'
import layout from '../partials/layout.js'
import sections from '../partials/sections.js'

export default (page, context) => layout({
  title: page.title,
  content: html`
    <main>
      <header class="page-header">
        <a href="/">Back to home</a>
        <h1 class="text-block-heading">${page.title}</h1>
      </header>

      ${sections(page.sections, context)}
    </main>
  `
})

export const variants = () => sanity.fetch(`
  *[_type == "page"]{
    _id,
    slug,
    title,
    sections
  }
`)

export const file = page => (
  `${page.slug.current}.html`
)
