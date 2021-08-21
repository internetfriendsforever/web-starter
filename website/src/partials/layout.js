import sanity from '../utils/sanity.js'
import html from '../utils/html.js'
import navigation from './navigation.js'

export default async ({ title, content }) => {
  const site = await sanity.fetch(`
    *[_id == "default-site"]{
      _id,
      title,
      appearance
    }[0]
  `)

  function titleString (site, title) {
    const divider = '|'

    if (site && title) {
      return `${title} ${divider} ${site.title}`
    } else if (site) {
      return site.title
    } else if (title) {
      return `${title}`
    }
    return 'Home'
  }

  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>${titleString(site, title)}</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${site.appearance && html`
          <meta name="theme-color" content="${site.appearance.themeColor.hex}">
        `}
        <link rel="stylesheet" href="/assets/reset.css">
        <link rel="stylesheet" href="/assets/system.css">
        <link rel="stylesheet" href="/assets/styles.css">
      </head>
      <body>
        <header class="site-header">
          <span class="text-color-dark">${site.title}</span>

          ${navigation()}
        </header>

        ${content}

        <footer class="site-footer">
          <p>
            Happy coding – <a href="https://internetfriendsforever.com">internetfriendsforever</a>
          </p>
        </footer>
      </body>
    </html>
  `
}
