const html = require('../utils/html')
const layout = require('../partials/layout')
const number = require('../partials/number')

module.exports = () => layout({
  title: 'About',
  content: html`
    <a href="/">Back to home</a>
    <h1>About page</h1>
    ${number()}
  `
})
