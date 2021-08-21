import blocksToHyperScript from '@sanity/block-content-to-hyperscript'
import blocksToHtml from '@sanity/block-content-to-html'
import sanity from '../utils/sanity.js'
import html from '../utils/html.js'

const h = blocksToHtml.h

const serializers = {
  types: {
    imageExtended: props => {
      const { asset, caption } = props.node
      const image = sanity.image(asset).width(500)
      const imageUrl = image.url()

      return (
        h('figure', {
          className: 'portable-text-figure',
          children: [
            h('img', { src: imageUrl }),
            h('figcaption', { className: 'portable-text-figcaption text-block-small' }, blocksToHyperScript({ blocks: caption }))
          ]
        })
      )
    }
  }
}

export default (sections = [], context) => html`
  ${sections.map((section, index) => {
    switch (section._type) {
      case 'section.banner':
        return html`
          <section class="section-banner">
            ${section.content && sanity.html(section.content, { context })}

            ${section.image && html`
              <img src="${sanity.image(section.image)}">
            `}
          </section>
        `
      case 'section.text':
        return html`
          <section class="section-text">
            <div class="text-wrapper">
              ${section.content && sanity.html(section.content, {
                context,
                className: 'portable-text',
                serializers
              })}
            </div>
          </section>
        `
      default:
        return html`
          <section class="section-undefined">
            <code>Undefined section type (${section._type})</code>
          </section>
        `
    }
  })}
`
