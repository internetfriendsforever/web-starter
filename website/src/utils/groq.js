import logger from '../../utils/logger.js'
import sanity from './sanity.js'

class Groq {
  constructor (query) {
    this.query = query
  }

  toString () {
    return this.query
  }

  async fetch (params) {
    try {
      return await sanity.fetch(this.query, params)
    } catch (error) {
      logger.error(`Query error: ${error.message}\n${this.query}`)
    }
  }
}

export default (strings, ...keys) => {
  const parts = [...strings]

  keys.forEach((key, i) => {
    parts.splice(i * 2 + 1, 0, key)
  })

  return new Groq(parts.join(''))
}

export const snippets = {
  draft: '(_id in path("drafts.**"))'
}
