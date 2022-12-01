import logger from '../../utils/logger.js'
import * as cache from './cache.js'

const fetchRequests = {}
const remoteFetchRequests = {}

export default function cachedFetch (params, handler) {
  const key = cache.key(JSON.stringify(params))

  if (!fetchRequests[key]) {
    fetchRequests[key] = fetchFromStorage(key, params, handler)
  }

  return fetchRequests[key]
}

async function fetchFromStorage (key, params, handler) {
  if (await cache.has(key)) {
    const cached = await cache.get(key)

    logger.debug(`Cache: Hit (file) ${key}`)

    try {
      return JSON.parse(cached.data.toString())
    } catch (error) {
      logger.error(`Cache: Could not parse ${key}`)
    }
  } else {
    logger.debug(`Cache: Miss ${key}`)
  }

  const fetch = handler(params)

  remoteFetchRequests[key] = fetch

  const data = await fetch

  logger.debug(`Cache: Put ${key}`)
  cache.put(key, JSON.stringify(data))

  return data
}

export function stats () {
  const requests = Object.keys(fetchRequests).length
  const remoteRequests = Object.keys(remoteFetchRequests).length

  return {
    requests,
    remoteRequests,
    cached: requests - remoteRequests
  }
}
