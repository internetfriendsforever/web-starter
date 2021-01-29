const pretty = require('pretty')
const logger = require('../utils/logger')
const sanity = require('./utils/sanity')

const pages = {
  index: require('./pages/index'),
  about: require('./pages/about'),
  article: require('./pages/article')
}

module.exports = async () => {
  const files = {
    'index.html': pages.index(),
    'about.html': pages.about()
  }

  const articles = await sanity.fetch('*[_type == "article"]._id')

  articles.forEach(id => {
    files[`articles/${id}/index.html`] = pages.article(id)
  })

  // Render in parallell
  const promises = Object.values(files)
  const values = await Promise.all(promises)

  Object.keys(files).forEach((key, i) => {
    files[key] = values[i]
  })

  // Print number of fetch requests to Sanity API
  logger.debug(`Sanity queries performed: ${sanity.fetchCount()}`)

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
