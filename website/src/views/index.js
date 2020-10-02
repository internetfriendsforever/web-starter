const template = require('../utils/template')
const sanity = require('../utils/sanity')

module.exports = async () => {
  const articles = await sanity.fetch(`
    *[_type == "article"]{ _id, title }
  `)

  return template('layout', {
    title: 'Index',
    content: template('index', {
      articles
    })
  })
}
