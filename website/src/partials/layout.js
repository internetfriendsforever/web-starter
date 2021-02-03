const html = require('../utils/html')

module.exports = async ({ title, main }) => {
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>${title}</title>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="/assets/styles.css" />
      </head>
      <body>
        ${main}

        <footer>
          <p>
            Happy coding – <a href="https://internetfriendsforever.com">internetfriendsforever</a>
          </p>
        </footer>
      </body>
    </html>
  `
}
