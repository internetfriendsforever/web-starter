const template = require('../utils/template')
const layout = require('../partials/layout')

module.exports = () => {
  return layout({
    title: 'About',
    content: template('about')
  })
}
