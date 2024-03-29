import html from '../utils/html.js'

export default ({ id, value = 0 }) => html`
  <div class="counter" id="${id}">
    Counter:

    <span class="counter__count">
      ${value}
    </span>

    <button class="counter__increment">
      Increment
    </button>
  </div>

  <script type="module">
    import counter from '/assets/counter.js'

    counter({
      id: '${id}',
      value: ${value}
    })
  </script>
`
