module.exports = {
  locale: {
    lang: data => data.page.filePathStem.split('/').filter(Boolean)[0]
  }
}
