const fs = require('fs')
const path = require('path')
const pretty = require('pretty')

module.exports = function write (context, file, body) {
  if (file.endsWith('.html')) {
    body = pretty(body, { ocd: true })
  }

  return new Promise((resolve, reject) => {
    console.log('Writing', file)
    fs.writeFile(path.join(context.dist, file), body, error => {
      if (error) {
        reject(error)
      } else {
        resolve()
      }
    })
  })
}
