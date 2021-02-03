const html = require('../utils/html')

module.exports = () => {
  const number = new Promise((resolve, reject) => {
    setTimeout(() => resolve(Math.random()), 100)
  })

  return html`
    <p>Number: ${number}</p>
  `
}
