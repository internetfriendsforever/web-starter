const sanity = require('./utils/sanity')

module.exports = async () => {
  const articles = await sanity.fetch(`
    *[_type == "article"]{ _id, title }
  `)

  return {
    title: 'Index',
    articles
  }
}
