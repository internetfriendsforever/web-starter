const sanity = require('./utils/sanity')

module.exports = ({ id }) => sanity.fetch(`
  *[
    _type == "article" &&
    _id == "${id}"
  ]{
    title
  }[0]
`)
