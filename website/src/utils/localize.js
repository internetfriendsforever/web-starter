module.exports = function (object, locale) {
  return object[locale.lang] || object.en
}
