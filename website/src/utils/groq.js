const sanity = require('./sanity')

class Groq {
  constructor (query) {
    this.query = query
  }

  toString () {
    return this.query
  }

  fetch () {
    return sanity.fetch(this.query)
  }
}

module.exports = query => new Groq(query)
