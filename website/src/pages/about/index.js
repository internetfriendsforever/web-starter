const html = require('../../utils/html')
const layout = require('../../partials/layout')

// TODO: Example using an async partial
module.exports = () => layout({
  title: 'About',
  main: html`
    <a href="/">Back to home</a>
    <h1>About page</h1>
  `
})
