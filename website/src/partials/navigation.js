const html = require('../utils/html')
const sanity = require('../utils/sanity')

module.exports = async () => {
  const navigation = await sanity.fetch(`
    *[_type == "navigation"]{
      _id,
      items[]{
        target->,
        children[]{
          target->
        }
      }
    }[0]
  `)

  if (!navigation) { return null }

  function navigationItem (item) {
    return html`
      <a href="/${item.target.slug.current}">${item.target.title}</a>
      ${navigationChildren(item.children)}
    `
  }

  function navigationChildren (children = []) {
    if (children.length) {
      return html`
        <ul class="sub-nav-list">
          ${children.map(item => html`
            <li>${navigationItem(item)}</li>
          `)}
        </ul>
      `
    }
  }

  return html`
    <nav>
      ${navigation.items.map(item => html`
        ${navigationItem(item)}
      `)}
    </nav>
  `
}
