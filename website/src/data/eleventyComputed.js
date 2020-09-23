const { getTranslation } = require('../utils/i18n')

module.exports = {
  locale: {
    lang: data => data.page.filePathStem.split('/').filter(Boolean)[0],

    strings: data => {
      return Object.keys(data.strings).reduce((result, key) => {
        result[key] = getTranslation(data.strings[key], data.locale.lang)
        return result
      }, {})
    },

    articles: data => {
      return data.articles.map(article => ({
        ...article,
        introduction: getTranslation(article.introduction, data.locale.lang)
      }))
    },

    locales: data => {
      return data.locales.map(locale => ({
        ...locale,
        current: locale.lang === data.locale.lang
      }))
    }
  }
}
