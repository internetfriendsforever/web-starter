const localize = require('../../utils/localize')
const pages = require('../pages.json')

const list = pages.map(page => ({
  key: page.key,
  path: localize(page.path),
  label: localize(page.label)
}))

const keys = {}

list.forEach(item => {
  keys[item.key] = item
})

module.exports = {
  list,
  keys
}
