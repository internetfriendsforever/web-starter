const html = require('../utils/html')

module.exports = ({ id, value = 0 }) => html`
  <div class="counter" id="${id}">
    Counter:

    <span class="counter__count">
      ${value}
    </span>

    <button class="counter__increment">
      Increment
    </button>
  </div>

  <script type="module" defer>
    import counter from '/assets/counter.js'

    counter({
      id: '${id}',
      value: ${value}
    })
  </script>
`
