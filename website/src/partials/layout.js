const html = require('../utils/html')

module.exports = ({ title, content }) => html`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>${title}</title>
      <meta charset="utf-8" />
      <link rel="stylesheet" href="/assets/styles.css" />
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
