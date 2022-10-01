import asyncTag from 'async-tag'

export function arrayProcessor (value) {
  if (Array.isArray(value)) {
    return value.join('')
  }
}

export function emptyProcessor (value) {
  if (value === undefined || value === null || typeof value === 'boolean') {
    return ''
  }
}

export const defaultProcessors = [arrayProcessor, emptyProcessor]

export default function ({ processors = defaultProcessors }) {
  return asyncTag(function (strings, ...keys) {
    return strings.reduce((result, string, index) => {
      return [
        result,
        string,
        index < strings.length - 1
          ? processors.reduce((value, processor) => {
            const output = processor(value)
            return output === undefined ? value : output
          }, keys[index])
          : ''
      ].join('')
    }, '')
  })
}
