const html = require('../utils/html')
const layout = require('../partials/layout')
const number = require('../partials/number')
const counter = require('../partials/counter')

module.exports = () => layout({
  title: 'Custom',
  content: html`
    <div class="stack">
      <nav class="nav-breadcrumbs">
        <a href="/">Back to home</a>
      </nav>

      <h1>Custom route</h1>
      <h2>Async partial</h2>

      ${number()}

      <h2>Array of async partials</h2>

      ${[
        number(),
        number(),
        number()
      ]}

      <h2>Client script</h2>

      <h3>Counter 1</h3>

      ${counter({
        id: 'counter-1',
        value: 10
      })}

      <h3>Counter 2</h3>

      ${counter({
        id: 'counter-2',
        value: 20
      })}
    </div>
  `
})
