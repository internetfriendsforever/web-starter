export default function ({ id, value }) {
  const element = document.getElementById(id)
  const count = element.querySelector('.counter__count')
  const increment = element.querySelector('.counter__increment')

  increment.addEventListener('click', function () {
    count.textContent = ++value
  })
}
