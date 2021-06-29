const html = require('../utils/html')
const layout = require('../partials/layout')

module.exports = context => layout({
  title: 'Context',
  content: html`
    <main class="text-wrapper">
      <a href="/">Back to home</a>

      <h1 class="text-block-heading">Context object</h1>

      <p>Available as:</p>
      <ul>
        <li>First argument in custom routes (as in this source file)</li>
        <li>Second argument in routes with variants</li>
      </ul>

      <p>Contains:</p>
      <ul>
        <li><code>variants</code>: A flat list of all variants from all routes</li>
      </ul>

      <pre>${JSON.stringify(context, null, 2)}</pre>
    </main>
  `
})
