const sanity = require('../utils/sanity')
const html = require('../utils/html')

module.exports = async ({ title, content }) => {
  const site = await sanity.fetch(`
    *[_id == "default-site"]{
      _id,
      title
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
        <link rel="stylesheet" href="/assets/styles.css">
      </head>
      <body>
        ${content}

        <footer>
          <p>
            Happy coding – <a href="https://internetfriendsforever.com">internetfriendsforever</a>
          </p>
        </footer>
      </body>
    </html>
  `
}
