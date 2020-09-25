const child = require('child_process')
const path = require('path')
const concurrently = require('concurrently')
const locales = require('./src/data/locales.json')

child.execSync('mkdir -p dist')
child.execSync('rm -f dist/assets')
child.execSync('ln -s ../src/assets assets', {
  cwd: path.join(__dirname, 'dist')
})

const serverOptions = [
  '--no-open',
  '--server "dist"',
  '--files "dist"',
  `--startPath "/${locales[0].lang}"`,
  '--reload-delay 0',
  '--no-notify'
]

const server = `npx browser-sync start ${serverOptions.join(' ')}`

const builds = locales.map(locale => ({
  name: locale.lang,
  command: `lang=${locale.lang} npx eleventy --output=dist/${locale.lang} --watch`
}))

concurrently([
  ...builds,
  server
])
