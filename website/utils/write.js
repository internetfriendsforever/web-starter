const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const logger = require('../utils/logger')

module.exports = async function write (dist, files) {
  const keys = Object.keys(files)

  // Ensure folders
  await Promise.all(
    keys
      .map(path.dirname)
      .map(dir => path.join(dist, dir))
      .filter(isUnique)
      .map(dir => mkdirp(dir))
  )

  // Write files
  return Promise.all(
    keys.map(key => {
      const out = path.join(dist, key)
      const body = files[key]

      return new Promise((resolve, reject) => {
        logger.debug(`Writing: ${key}`)

        fs.writeFile(out, body, error => {
          if (error) {
            reject(error)
          } else {
            resolve()
          }
        })
      })
    })
  )
}

function isUnique (value, index, self) {
  return self.indexOf(value) === index
}
