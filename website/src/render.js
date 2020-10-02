const pretty = require('pretty')
const sanity = require('./utils/sanity')
const index = require('./views/index')
const about = require('./views/about')
const article = require('./views/article')

module.exports = async () => {
  const files = {
    'index.html': index(),
    'about.html': about()
  }

  const articles = await sanity.fetch('*[_type == "article"]._id')

  articles.forEach(id => {
    files[`articles/${id}/index.html`] = article(id)
  })

  // Render in paralell
  const promises = Object.values(files)
  const values = await Promise.all(promises)

  Object.keys(files).forEach((key, i) => {
    files[key] = values[i]
  })

  // Make html pretty
  for (const key in files) {
    if (key.endsWith('.html')) {
      files[key] = pretty(files[key], {
        ocd: true
      })
    }
  }

  return files
}
