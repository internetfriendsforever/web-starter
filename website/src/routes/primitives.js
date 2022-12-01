import layout from '../partials/layout.js'
import stack from '../partials/primitives/stack.js'
import pad from '../partials/primitives/pad.js'
import text from '../partials/primitives/text.js'

export default function () {
  return layout({
    title: 'Primitives',
    content: stack({
      items: [
        'One',
        'Two',
        'Three',
        pad({
          content: stack({
            gap: null,
            items: [
              text({
                content: 'Hello'
              }),
              text({
                strong: true,
                content: 'Strong'
              }),
              text({
                emphasis: true,
                content: 'Emphasis'
              })
            ]
          })
        })
      ]
    })
  })
}
