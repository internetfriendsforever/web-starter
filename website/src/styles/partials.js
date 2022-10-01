import * as path from 'path'
import glob from 'glob'
import css from '../utils/css.js'

export default () => {
  const folder = path.join(new URL('../partials', import.meta.url).pathname)
  const files = glob.sync('**/*.js', { cwd: folder })

  return css`
    ${files.map(async file => {
      const partial = await import(path.join(folder, file))

      if (partial.css) {
        return partial.css()
      }

      return null
    })}
  `
}
