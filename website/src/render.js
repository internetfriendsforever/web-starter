import path from 'path'
import fs from 'fs/promises'
import pretty from 'pretty'
import logger from '../utils/logger.js'

export default async () => {
  const files = {}
  const variants = {}

  const folder = new URL(path.join(path.dirname(import.meta.url), 'routes')).pathname
  const routes = await fs.readdir(folder)

  // Get route variants
  await Promise.all(routes.map(async file => {
    const route = await import(path.join(folder, file))

    if (typeof route.variants === 'function') {
      variants[file] = await route.variants()

      if (!Array.isArray(variants[file])) {
        return logger.warn(`Route ${file} variants method should return an array`)
      }
    }
  }))

  const context = {
    variants: Object.values(variants).flat()
  }

  // Build routes in parallell
  await Promise.all(routes.map(async file => {
    const route = await import(path.join(folder, file))

    if (typeof route.default !== 'function') {
      return logger.warn(`Route ${file} does not export a method`)
    }

    if (file in variants) {
      if (typeof route.file !== 'function') {
        return logger.warn(`Route ${file} exports variants, but no file method`)
      }

      for (const variant of variants[file]) {
        files[await route.file(variant)] = await route.default(variant, context)
      }
    } else {
      let filename = path.join(
        path.dirname(file),
        path.basename(file, path.extname(file))
      ) + '.html'

      if (typeof route.file === 'function') {
        filename = await route.file()
      }

      files[filename] = await route.default(context)
    }
  }))

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
