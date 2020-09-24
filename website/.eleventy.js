const pretty = require('pretty')

module.exports = function(config) {
  config.addTransform("html-pretty", (content, outputPath) => (
    outputPath.endsWith(".html")
      ? pretty(content, { ocd: true })
      : content
  ))

  return {
    templateFormats: ['mustache'],
    jsDataFileSuffix: ".data",
    dir: {
      input: 'src/views',
      data: '../data',
      includes: '../includes'
    }
  }
}
