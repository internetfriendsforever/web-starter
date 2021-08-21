import sanity from './sanity.js'

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

export default query => new Groq(query)
