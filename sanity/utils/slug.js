import slugify from 'slugify'
import client from 'part:@sanity/base/client'

export function isUniqueAcrossAllDocuments (slug, options) {
  const { document, path } = options
  const lang = path[1]

  const id = document._id.replace(/^drafts\./, '')
  const params = {
    draft: `drafts.${id}`,
    published: id,
    slug
  }

  const query = `!defined(*[!(_id in [$draft, $published]) && slug.${lang}.current == $slug][0]._id)`

  return client.fetch(query, params)
}

export function asyncSlugifier (input, type) {
  const slug = slugify(input, { lower: true })
  const query = 'count(*[!(_id in path("drafts.**")) && slug.current == $slug]{_id})'
  const params = { slug: slug }

  return client.fetch(query, params).then(count => {
    if (count === 0) {
      return slug
    }

    return `${slug}-${count + 1}`
  })
}

export default {
  isUniqueAcrossAllDocuments,
  asyncSlugifier
}
