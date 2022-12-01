import layout from '../partials/layout.js'
import stack from '../partials/primitives/stack.js'
import pad from '../partials/primitives/pad.js'

export default function () {
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
