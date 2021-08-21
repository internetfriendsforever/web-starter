import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import blocksToHtml from '@sanity/block-content-to-html'
import * as cache from './cache.js'
import config from '../../../sanity/sanity.json'

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

export default {
  client,
  image,
  html,
  fetch
}
