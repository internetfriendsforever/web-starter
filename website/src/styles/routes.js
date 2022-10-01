import * as path from 'path'
import glob from 'glob'
import css from '../utils/css.js'

export default () => {
  const folder = path.join(new URL('../routes', import.meta.url).pathname)
  const files = glob.sync('**/*.js', { cwd: folder })

  return css`
    ${files.map(async file => {
      const route = await import(path.join(folder, file))

      if (route.css) {
        return route.css()
      }

      return null
    })}
  `
}
