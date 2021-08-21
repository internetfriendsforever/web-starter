import path from 'path'
import crypto from 'crypto'
import cacache from 'cacache'
import logger from '../../utils/logger.js'

const cachePath = new URL(
  path.join(path.dirname(import.meta.url), '../../.cache')
).pathname

export const has = async function (key) {
  const info = await cacache.get.info(cachePath, key)
  const hit = !!info
  logger.debug(`Cache ${key} ${hit ? 'hit' : 'miss'}`)
  return hit
}

export const get = async function (key) {
  return cacache.get(cachePath, key)
}

export const put = async function (key, data) {
  logger.debug(`Caching ${key}`)
  return cacache.put(cachePath, key, data)
}

export const key = function (string) {
  const shasum = crypto.createHash('sha1')
  shasum.update(string)
  return shasum.digest('hex')
}
