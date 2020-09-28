const localize = require('../../utils/localize')

const list = [
  {
    key: 'home',
    path: localize({
      en: '/',
      de: '/',
      nb: '/'
    }),
    label: localize({
      en: 'Home',
      de: 'Hause',
      nb: 'Hjem'
    })
  },
  {
    key: 'about',
    path: localize({
      en: '/about/',
      de: '/uber/',
      nb: '/om/'
    }),
    label: localize({
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
