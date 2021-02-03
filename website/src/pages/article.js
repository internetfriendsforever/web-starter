const html = require('../utils/html')
const sanity = require('../utils/sanity')
const layout = require('../partials/layout')

module.exports = article => {
  return layout({
    title: article.title,
    main: html`
      <a href="/">Back to home</a>
      <h1>${article.title}</h1>
    `
  })
}

// TODO: Right naming? Variants? Collection?
module.exports.variants = () => sanity.fetch(`
  *[_type == "article"]{
    _id,
    title
  }
`)

// TODO: Right naming? Url? With file extension instead of in render?
module.exports.url = article => (
  `article/${article._id}`
)
