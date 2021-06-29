const html = require('../utils/html')
const sanity = require('../utils/sanity')
const layout = require('../partials/layout')
const sections = require('../partials/sections')

module.exports = (page, context) => layout({
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

module.exports.variants = () => sanity.fetch(`
  *[_type == "page"]{
    _id,
    slug,
    title,
    sections
  }
`)

module.exports.file = page => (
  `${page.slug.current}.html`
)
