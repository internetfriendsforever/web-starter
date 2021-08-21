import asyncTag from 'async-tag'

function tag (strings, ...keys) {
  return strings.reduce((result, string, i) => {
    let value = ''

    if (i < strings.length - 1) {
      value = keys[i]

      if (Array.isArray(value)) {
        value = value.join('')
      }

      if (value === undefined || value === null) {
        value = ''
      }
    }

    return result + string + value
  }, '')
}

export default asyncTag(tag)
