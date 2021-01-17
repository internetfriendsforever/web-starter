const template = require('../utils/template')
const sanity = require('../utils/sanity')
const layout = require('../partials/layout')

module.exports = async () => {
  const articles = await sanity.fetch(`
    *[_type == "article"]{ _id, title }
  `)

  return layout({
    title: 'Index',
    content: template('index', {
      articles
    })
  })
}
