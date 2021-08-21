import html from '../utils/html.js'

export default () => {
  const number = new Promise((resolve, reject) => {
    setTimeout(() => resolve(Math.random()), 100)
  })

  return html`
    <p>Number: ${number}</p>
  `
}
