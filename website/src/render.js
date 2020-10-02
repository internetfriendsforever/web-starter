const pretty = require('pretty')
const index = require('./views/index')
const about = require('./views/about')
const article = require('./views/article')
const sanity = require('./utils/sanity')

module.exports = async () => {
  const files = {
    'index.html': index(),
    'about.html': about()
  }

  const articles = await sanity.fetch('*[_type == "article"]._id')

  articles.forEach(id => {
    files[`articles/${id}/index.html`] = article(id)
  })

  // Render all in parallel
  const promises = Object.values(files)
  const values = await Promise.all(promises)

  Object.keys(files).forEach((key, i) => {
    let body = values[i]

    // Make html pretty
    if (key.endsWith('.html')) {
      body = pretty(body, {
        ocd: true
      })
    }

    files[key] = body
  })

  return files
}
