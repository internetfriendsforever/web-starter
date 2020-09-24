module.exports = function (object, locale) {
  return object[process.env.lang] || object.en
}
