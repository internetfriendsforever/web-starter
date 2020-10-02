const template = require('../utils/template')
const sanity = require('../utils/sanity')

module.exports = async id => {
  const article = await sanity.fetch(`
    *[_type == "article" && _id == "${id}"]{ _id, title }[0]
  `)

  return template('layout', {
    title: article.title,
    content: template('article', article)
  })
}
