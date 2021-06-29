const sanity = require('../utils/sanity')
const html = require('../utils/html')

module.exports = (sections = [], context) => html`
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
              ${section.content && sanity.html(section.content, { context, className: 'portable-text' })}
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
