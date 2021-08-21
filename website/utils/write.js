import fs from 'fs/promises'
import path from 'path'
import logger from '../utils/logger.js'

export default async function write (dist, files) {
  const keys = Object.keys(files)

  // Ensure folders
  await Promise.all(
    keys
      .map(path.dirname)
      .map(dir => path.join(dist, dir))
      .filter(isUnique)
      .map(dir => fs.mkdir(dir, {
        recursive: true
      }))
  )

  // Write files
  return Promise.all(
    keys.map(async key => {
      const out = path.join(dist, key)
      const body = files[key]

      logger.debug(`Writing: ${key}`)

      return fs.writeFile(out, body)
    })
  )
}

function isUnique (value, index, self) {
  return self.indexOf(value) === index
}
