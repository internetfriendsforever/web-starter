import html from './html.js'
import attributeMap from './attributeMap.js'

// Based on https://developer.mozilla.org/en-US/docs/Glossary/empty_element
const emptyTags = [
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'keygen',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr'
]

export default ({
  tag = 'div',
  attributes = '',
  content = ''
}) => {
  const opening = [
    tag,
    attributes && attributeMap(attributes)
  ].filter(Boolean).join(' ')

  const isEmptyTag = emptyTags.indexOf(tag) > 0

  if (isEmptyTag) {
    return html`<${opening} />`
  } else {
    return html`<${opening}>${content}</${tag}>`
  }
}
