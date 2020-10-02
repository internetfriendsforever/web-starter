const localize = require('../../utils/localize')

const list = [
  {
    key: 'home',
    path: localize.object({
      en: '/',
      de: '/',
      nb: '/'
    }),
    label: localize.object({
      en: 'Home',
      de: 'Hause',
      nb: 'Hjem'
    })
  },
  {
    key: 'about',
    path: localize.object({
      en: '/about/',
      de: '/uber/',
      nb: '/om/'
    }),
    label: localize.object({
      en: 'About',
      de: 'Über',
      nb: 'Om'
    })
  }
]

const keys = {}

list.forEach(item => {
  keys[item.key] = item
})

module.exports = {
  list,
  keys
}
