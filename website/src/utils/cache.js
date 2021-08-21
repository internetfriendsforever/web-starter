import crypto from 'crypto'
import cacache from 'cacache'

const cachePath = new URL('../../.cache', import.meta.url).pathname

export function has (key) {
  return cacache.get.info(cachePath, key).then(Boolean)
}

export function get (key) {
  return cacache.get(cachePath, key)
}

export function put (key, data) {
  return cacache.put(cachePath, key, data)
}

export function key (string) {
  return crypto
    .createHash('sha1')
    .update(string)
    .digest('hex')
}
