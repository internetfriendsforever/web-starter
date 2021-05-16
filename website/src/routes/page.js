const html = require('../utils/html')
const sanity = require('../utils/sanity')
const layout = require('../partials/layout')

module.exports = page => layout({
  title: page.title,
  currentPath: page.slug.current,
  content: html`
    <section class="stack">
      <nav class="nav-breadcrumbs">
        <a href="/">Back to home</a>
      </nav>

      <h1>${page.title}</h1>
      <p>${page.slug.current}</p>

      ${page.sections && html`
        <p>This page has ${page.sections.length} sections</p>
      `}
    </section>
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
