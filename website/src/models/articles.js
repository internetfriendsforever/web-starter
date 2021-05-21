const groq = require('../utils/groq')

function getAll () {
  return groq`
    *[_type == "article"]{
      _id,
      title,
      image,
      body,
      "url": "articles/" + _id
    }
  `.fetch()
}

module.exports = {
  getAll
}
