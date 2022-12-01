import layout from '../partials/layout.js'
import stack from '../partials/primitives/stack.js'
import pad from '../partials/primitives/pad.js'

export function render () {
  return layout({
    title: 'Primitives',
    content: stack({
      items: [
        'One',
        'Two',
        'Three',
        pad({
          content: 'Hello'
        })
      ]
    })
  })
}
