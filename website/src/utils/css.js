import tag, { defaultProcessors } from './tag.js'
import { Selectable } from './classNames.js'

export default tag({
  processors: [
    ...defaultProcessors,
    value => {
      if (value instanceof Selectable) {
        return value.selector
      }
    }
  ]
})
