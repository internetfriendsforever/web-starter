import groq from '../utils/groq.js'

export function getAll () {
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
