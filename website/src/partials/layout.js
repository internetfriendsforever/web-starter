const template = require('../utils/template')

module.exports = async data => {
  return template('layout', data)
}
