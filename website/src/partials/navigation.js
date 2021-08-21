import html from '../utils/html.js'
import sanity from '../utils/sanity.js'

export default async () => {
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
      <a href="/${item.target.slug.current}" class="main-nav-item">${item.target.title}</a>
      ${navigationChildren(item.children)}
    `
  }

  function navigationChildren (children = []) {
    if (children.length) {
      return html`
        <ul>
          ${children.map(item => html`
            <li>${navigationItem(item)}</li>
          `)}
        </ul>
      `
    }
  }

  return html`
    <nav class="main-nav">
      ${navigation.items.map(item => html`
        ${navigationItem(item)}
      `)}
    </nav>
  `
}
