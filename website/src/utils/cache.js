const path = require('path')
const crypto = require('crypto')
const cacache = require('cacache')
const logger = require('../../utils/logger')

const cachePath = path.join(__dirname, '../../.cache')

module.exports.has = async function (key) {
  const info = await cacache.get.info(cachePath, key)
  const hit = !!info
  logger.debug(`Cache ${key} ${hit ? 'hit' : 'miss'}`)
  return hit
}

module.exports.get = async function (key) {
  return cacache.get(cachePath, key)
}

module.exports.put = async function (key, data) {
  logger.debug(`Caching ${key}`)
  return cacache.put(cachePath, key, data)
}

module.exports.key = function (string) {
  const shasum = crypto.createHash('sha1')
  shasum.update(string)
  return shasum.digest('hex')
}
