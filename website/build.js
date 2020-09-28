const child = require('child_process')
const concurrently = require('concurrently')
const locales = require('../locales')

child.execSync('mkdir -p dist')
child.execSync('cp -r src/assets dist/assets')

const builds = locales.map(locale => ({
  name: locale.lang,
  command: `lang=${locale.lang} npx eleventy --output=dist/${locale.lang}`
}))

concurrently(builds)
