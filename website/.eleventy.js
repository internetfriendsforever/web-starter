const pretty = require('pretty')

module.exports = function(config) {
  config.addPassthroughCopy({ 'src/assets': 'assets' })

  config.setBrowserSyncConfig({
    ghostMode: false
  })

  config.addTransform("html-pretty", function(content, outputPath) {
    if (outputPath.endsWith(".html")) {
      return pretty(content, { ocd: true })
    }

    return content
  })

  return {
    templateFormats: ['mustache'],
    jsDataFileSuffix: ".data",
    dir: {
      input: 'src/views',
      output: 'dist',
      data: '../data',
      includes: '../includes'
    }
  }
}
