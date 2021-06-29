const html = require('../utils/html')
const sanity = require('../utils/sanity')
const layout = require('../partials/layout')

module.exports = page => layout({
  title: page.title,
  content: html`
    <main class="text-wrapper">
      <a href="/">Back to home</a>
      <h1 class="text-block-heading">${page.title}</h1>

      ${page.sections && html`
        <p>This page has ${page.sections.length} sections</p>
      `}
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
