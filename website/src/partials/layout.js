const sanity = require('../utils/sanity')
const html = require('../utils/html')
const navigation = require('./navigation')

module.exports = async ({ title, content }) => {
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
          <b>${site.title}</b>

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
