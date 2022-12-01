import layout from '../partials/layout.js'
import stack from '../partials/primitives/stack.js'
import pad from '../partials/primitives/pad.js'
import text from '../partials/primitives/text.js'
import heading from '../partials/primitives/heading.js'

export default function () {
  return layout({
    title: 'Primitives',
    content: stack({
      items: [
        heading({
          level: 1,
          content: 'Primitives'
        }),
        'One',
        'Two',
        'Three',
        pad({
          content: stack({
            gap: null,
            items: [
              text({
                content: 'Text'
              }),
              text({
                content: 'Strong',
                tag: 'strong'
              }),
              text({
                content: 'Emphasis',
                tag: 'em'
              }),
              text({
                bold: true,
                content: 'Bold'
              }),
              text({
                italic: true,
                content: 'Italic'
              }),
              text({
                highlighted: true,
                content: 'Highlighted'
              }),
              text({
                muted: true,
                content: 'Muted'
              }),
              text({
                striked: true,
                content: 'Striked'
              }),
              text({
                small: true,
                content: 'Small'
              }),
              text({
                smaller: true,
                content: 'Smaller'
              })
            ]
          })
        }),
        stack({
          gap: null,
          items: [
            heading({
              level: 1,
              content: 'Heading 1'
            }),
            heading({
              level: 2,
              content: 'Heading 2'
            }),
            heading({
              level: 3,
              content: 'Heading 3'
            }),
            heading({
              level: 4,
              content: 'Heading 4'
            }),
            heading({
              level: 5,
              content: 'Heading 5'
            }),
            heading({
              level: 6,
              content: 'Heading 6'
            })
          ]
        })
      ]
    })
  })
}
