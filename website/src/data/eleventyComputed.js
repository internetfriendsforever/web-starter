const locales = require('./locales.json')

const langs = locales.map(locale => locale.lang)

function getTranslation (object, lang) {
  return object[lang] || object[langs.find(lang => lang in object)]
}

module.exports = {
  locale: data => {
    // Find current lang based on template file path (e.g. /en/about)
    const lang = data.page.filePathStem.split('/').filter(Boolean)[0]

    // Translate strings
    const strings = Object.keys(data.strings).reduce((result, key) => {
      result[key] = getTranslation(data.strings[key], lang)
      return result
    }, {})

    // Translate articles
    const articles = data.articles.map(article => ({
      ...article,
      introduction: getTranslation(article.introduction, lang)
    }))

    // Find path mappings to other locales
    // Check if locale is the current one (for highlighting)
    const locales = data.locales.map(locale => {
      const mappings = {}

      data.navigation.forEach(item => {
        mappings[getTranslation(item.path, lang)] = item.path
      })

      const localePath = data.page.url.replace(new RegExp('^/' + lang), '')
      const mapping = mappings[localePath]

      return {
        ...locale,
        path: mapping ? getTranslation(mapping, locale.lang) : '',
        current: locale.lang === lang
      }
    })

    // Translate navigation labels
    // Check if navigation page is the current one (for highlighting)
    const navigation = data.navigation.map(item => {
      const path = `/${lang}${getTranslation(item.path, lang)}`

      return {
        ...item,
        path,
        label: getTranslation(item.label, lang),
        current: data.page.url === path
      }
    })

    return {
      lang,
      strings,
      articles,
      locales,
      navigation
    }
  }
}
