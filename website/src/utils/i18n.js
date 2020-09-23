const fallbacks = ['en', 'de']

function getTranslation (object, lang) {
  return object[lang] || object[fallbacks.find(lang => lang in object)]
}

module.exports = {
  getTranslation
}
