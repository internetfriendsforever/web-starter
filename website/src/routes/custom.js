import html from '../utils/html.js'
import layout from '../partials/layout.js'
import number from '../partials/number.js'
import counter from '../partials/counter.js'

export default function () {
  return layout({
    title: 'Custom',
    content: html`
      <main class="text-wrapper">
        <a href="/">Back to home</a>

        <h1 class="text-block-heading">Custom route</h1>

        <h2 class="text-block-subhead">Async partial</h2>

        ${number()}

        <h2 class="text-block-subhead">Array of async partials</h2>

        ${[
          number(),
          number(),
          number()
        ]}

        <h2 class="text-block-subhead">Client script</h2>

        <h3 class="text-block-normal">Counter 1</h3>

        ${counter({
          id: 'counter-1',
          value: 10
        })}

        <h3 class="text-block-normal">Counter 2</h3>

        ${counter({
          id: 'counter-2',
          value: 20
        })}
      </main>
    `
  })
}
