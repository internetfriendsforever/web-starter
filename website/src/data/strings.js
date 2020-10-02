const localize = require('../utils/localize')

module.exports = {
  hello: localize.object({
    en: 'Hello World!',
    de: 'Hallo Welt!',
    nb: 'Hei Verden!'
  }),
  welcome: localize.object({
    en: 'Welcome to this website',
    de: 'Willkommen auf dieser seite',
    nb: 'Velkommen til dette nettstedet'
  }),
  about: localize.object({
    en: 'About this website',
    de: 'Über diese seite',
    nb: 'Om dette nettstedet'
  }),
  lastUpdate: localize.object({
    en: 'Last update',
    de: 'Letztes Update',
    nb: 'Siste oppdatering'
  })
}
