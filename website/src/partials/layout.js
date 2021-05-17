const sanity = require('../utils/sanity')
const html = require('../utils/html')
const navigation = require('./navigation')

module.exports = async ({ title, currentPath, content }) => {
  const site = await sanity.fetch(`
    *[_id == "default-site"]{
      _id,
      title
    }[0]
  `)

  function titleString (site, title) {
    const divider = '|'

    if (site && title && site.title) {
      return `${title} ${divider} ${site.title}`
    } else if (site && site.title) {
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
        <link rel="stylesheet" href="/assets/reset.css">
        <link rel="stylesheet" href="/assets/theme.css">
        <link rel="stylesheet" href="/assets/styles.css">
      </head>
      <body>
        <div class="grid grid--full-height">
          <header class="header wrapper">
            <div class="grid grid--gap">
              ${site && site.title
                ? html`
                  <div class="box">${site.title}</div>
                `
                : ''
              }

              <div class="box">
                ${navigation({
                  currentPath: currentPath,
                  currentClassName: 'link-current'
                })}
              </div>
            </div>
          </header>

          <main class="wrapper">
            ${content}
          </main>

          <footer class="footer wrapper">
            <p>
              Happy coding – <a href="https://internetfriendsforever.com" class="nav-link">internetfriendsforever</a>
            </p>
            <p>
              Cyberspace Industries
            </p>
          </footer>
        </div>
      </body>
    </html>
  `
}
