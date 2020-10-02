const template = require('../utils/template')

module.exports = () => {
  return template('layout', {
    title: 'About',
    content: template('about')
  })
}
