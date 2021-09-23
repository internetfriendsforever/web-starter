import path from 'path'
import fs from 'fs/promises'
import pretty from 'pretty'
import logger from '../utils/logger.js'
import { stats } from './utils/cachedFetch.js'

export default async () => {
  const files = {}
  const variants = {}

  const folder = new URL('routes', import.meta.url).pathname
  const routes = await fs.readdir(folder)

  // Get route variants
  await Promise.all(routes.map(async file => {
    const route = await import(path.join(folder, file))

    if (typeof route.variants === 'function') {
      variants[file] = await route.variants()

      if (!Array.isArray(variants[file])) {
        return logger.warn(`Route ${file} "variants" method should resolve to an array`)
      }
    }
  }))

  const context = {
    variants: Object.values(variants).flat()
  }

  // Build routes in parallell
  await Promise.all(routes.map(async file => {
    const route = await import(path.join(folder, file))

    if (typeof route.render !== 'function') {
      return logger.warn(`Route ${file} does not export a "render" method`)
    }

    if (file in variants) {
      if (typeof route.file !== 'function') {
        return logger.warn(`Route ${file} exports a "variants" method, but "file" method is missing`)
      }

      return Promise.all(
        variants[file].map(async variant => {
          files[await route.file(variant, context)] = await route.render(variant, context)
        })
      )
    } else {
      let filename = path.join(
        path.dirname(file),
        path.basename(file, path.extname(file))
      ) + '.html'

      if (typeof route.file === 'function') {
        filename = await route.file()
      }

      files[filename] = await route.render(context)
    }
  }))

  const { requests, cached } = stats()

  logger.info(`${requests} fetch requests (${cached} cached)`)

  // Make html pretty
  for (const key in files) {
    if (key.endsWith('.html')) {
      files[key] = pretty(files[key], {
        ocd: true
      })
    }
  }

  return files
}
