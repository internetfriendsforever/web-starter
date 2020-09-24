const localize = require('../utils/localize')

module.exports = {
  hello: localize({
    en: 'Hello World!',
    de: 'Hallo Welt!',
    nb: 'Hei Verden!'
  }),
  welcome: localize({
    en: 'Welcome to this website',
    de: 'Willkommen auf dieser seite',
    nb: 'Velkommen til dette nettstedet'
  }),
  about: localize({
    en: 'About this website',
    de: 'Über diese seite',
    nb: 'Om dette nettstedet'
  }),
  lastUpdated: localize({
    en: 'Last updated:',
    de: 'Letzte Aktualisierung:',
    nb: 'Sist oppdatert:'
  })
}
