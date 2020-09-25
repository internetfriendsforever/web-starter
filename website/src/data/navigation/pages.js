const localize = require('../../utils/localize')

const items = {
  home: {
    path: localize({
      en: '/'
    }),
    label: localize({
      en: 'Home',
      de: 'Hause',
      nb: 'Hjem'
    })
  },

  about: {
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
}

module.exports = () => {
  return {
    ...items,
    list: Object.values(items)
  }
}
