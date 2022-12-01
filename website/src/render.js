import path from 'path'
import fs from 'fs/promises'
import pretty from 'pretty'
import logger from '../utils/logger.js'
import { stats } from './utils/cachedFetch.js'

export default async pattern => {
  const startTime = Date.now()

  const logStats = () => {
    const { requests, cached } = stats()
    const renderTime = `Render ${Date.now() - startTime}ms`
    const fetchRequests = `${cached} of ${requests} fetches cached`
    logger.info(`${renderTime} – ${fetchRequests}`)
  }

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
        return logger.warn(`Route ${file} variants method should return an array`)
      }
    }
  }))

  const context = {
    variants: Object.values(variants).flat()
  }

  // Build routes in parallell
  await Promise.all(
    routes.map(async file => {
      const route = await import(path.join(folder, file))

      if (typeof route.default !== 'function') {
        return logger.warn(`Route ${file} does not export default method for rendering`)
      }

      if (file in variants) {
        if (typeof route.file !== 'function') {
          return logger.warn(`Route ${file} exports variants, but no file method`)
        }

        return Promise.all(
          variants[file].map(async variant => {
            const filename = await route.file(variant, context)
            files[filename] = () => route.default(variant, context)
          })
        )
      } else {
        let filename = path.join(
          path.dirname(file),
          path.basename(file, path.extname(file))
        ) + '.html'

        if (typeof route.file === 'function') {
          filename = await route.file(context)
        }

        files[filename] = () => route.default(context)
      }
    })
  )

  const renderFile = async name => {
    return postProcess(name, await files[name]())
  }

  if (pattern) {
    const match = Object.keys(files).find(name => (
      name.match(pattern)
    ))

    if (match) {
      const body = await renderFile(match)

      logStats()

      return {
        match,
        body
      }
    } else {
      throw new Error(pattern + ' not found')
    }
  }

  const rendered = {}

  const renders = Object.keys(files).map(async name => {
    rendered[name] = await renderFile(name)
  })

  await Promise.all(renders)

  logStats()

  return rendered
}

function postProcess (file, body) {
  if (file.endsWith('.html')) {
    return pretty(body, {
      ocd: true
    })
  }

  return body
}
