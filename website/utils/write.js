const fs = require('fs')
const path = require('path')
const child = require('child_process')
const logger = require('../utils/logger')

module.exports = function write (dir, file, body) {
  const out = path.join(dir, file)

  return new Promise((resolve, reject) => {
    logger.debug(`Writing: ${file}`)
    child.execSync(`mkdir -p ${path.dirname(out)}`)
    fs.writeFile(out, body, error => {
      if (error) {
        reject(error)
      } else {
        resolve()
      }
    })
  })
}
