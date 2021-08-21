import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import blocksToHtml from '@sanity/block-content-to-html'
import logger from '../../utils/logger.js'
import * as cache from './cache.js'
import config from '../../../sanity/sanity.json'

const client = sanityClient({
  projectId: config.api.projectId,
  dataset: config.api.dataset,
  useCdn: false
})

const fetchRequests = {}
const remoteFetchRequests = {}

const fetch = async (query, params) => {
  const key = cache.key(JSON.stringify({ query, params }))

  if (key in fetchRequests) {
    logger.debug(`Cache: Hit (memory) ${key}`)
    return fetchRequests[key]
  } else {
    try {
      if (await cache.has(key)) {
        const cached = await cache.get(key)

        logger.debug(`Cache: Hit (file) ${key}`)

        try {
          const data = JSON.parse(cached.data.toString())
          fetchRequests[key] = data
          return data
        } catch (error) {
          throw new CacheParseException(key)
        }
      }

      throw new CacheMissException(key)
    } catch (error) {
      logger.log({
        level: error.level || 'error',
        message: error.message
      })

      const fetch = client.fetch(query, params)

      fetchRequests[key] = fetch
      remoteFetchRequests[key] = fetch

      const data = await fetch

      logger.debug(`Cache: Put ${key}`)
      cache.put(key, JSON.stringify(data))

      return data
    }
  }
}

function CacheParseException (key) {
  this.key = key
  this.level = 'warn'
  this.name = 'CacheParseException'
  this.message = `Cache: Could not parse ${this.key}`
}

function CacheMissException (key) {
  this.key = key
  this.level = 'debug'
  this.name = 'CacheMissException'
  this.message = `Cache: Miss ${this.key}`
}

const stats = () => {
  const requests = Object.keys(fetchRequests).length
  const remoteRequests = Object.keys(remoteFetchRequests).length

  return {
    requests,
    remoteRequests,
    cached: requests - remoteRequests
  }
}

const image = source => imageUrlBuilder(client).image(source)
const html = (blocks, props) => blocksToHtml({ blocks, ...props })

export default {
  client,
  image,
  html,
  fetch,
  stats
}
