const sanityClient = require('@sanity/client')
const imageUrlBuilder = require('@sanity/image-url')
const blocksToHtml = require('@sanity/block-content-to-html')
const cache = require('./cache')
const config = require('../../../sanity/sanity.json')

const client = sanityClient({
  projectId: config.api.projectId,
  dataset: config.api.dataset,
  useCdn: false
})

const fetchFresh = async (query, params, key) => {
  const data = await client.fetch(query, params)

  if (key) {
    cache.put(key, JSON.stringify(data))
  }

  return data
}

const fetch = async (query, params) => {
  const key = cache.key(JSON.stringify({ query, params }))

  if (await cache.has(key)) {
    try {
      const { data } = await cache.get(key)
      return JSON.parse(data.toString())
    } catch (error) {
      console.warn(`Error parsing cache ${key}. Fetching fresh...`)
      return fetchFresh(query, params, key)
    }
  } else {
    return fetchFresh(query, params, key)
  }
}

const image = source => imageUrlBuilder(client).image(source)
const html = (blocks, props) => blocksToHtml({ blocks, ...props })

const groq = {
  notDraft: '!(_id in path("drafts.**"))'
}

module.exports = {
  client,
  image,
  html,
  fetch,
  groq
}
