const groq = require('../utils/groq')

function getAll () {
  return groq`
    *[_type == "article"]{
      _id,
      title,
      image,
      body
    }
  `.fetch()
}

module.exports = {
  getAll
}
