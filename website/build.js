const fs = require('fs')
const path = require('path')
const pretty = require('pretty')
const child = require('child_process')
const Mustache = require('mustache')
const sanity = require('./src/utils/sanity')

const dist = path.join(__dirname, 'dist')
const src = path.join(__dirname, 'src')

build()

async function build () {
  console.log('Build started')
  console.time('Build complete')

  child.execSync(`mkdir -p ${dist}`)
  child.execSync(`rsync -r ${path.join(src, 'assets')} ${dist}`)

  await Promise.all([
    index(),
    articles()
  ])

  console.timeEnd('Build complete')
}

async function index () {
  const data = await getData('index')
  const html = page('index', data)
  await write('index.html', html)
}

async function articles () {
  child.execSync(`mkdir -p ${dist}/articles`)

  const articles = await sanity.fetch('*[_type == "article"]{ title, _id }')

  for (const i in articles) {
    const id = articles[i]._id
    const data = await getData('article', { id })
    const html = page('article', data)
    await write(`articles/${id}.html`, html)
  }
}

function page (templateName, data) {
  const content = render(templateName, data)
  return render('layout', { ...data, content })
}

function render (templateName, data) {
  const file = path.join(src, `${templateName}.mustache`)
  const template = fs.readFileSync(file, 'utf-8')
  return Mustache.render(template, data)
}

function getData (templateName, ...args) {
  return require(path.join(src, `${templateName}.data`))(...args)
}

function write (file, body) {
  if (file.endsWith('.html')) {
    body = pretty(body, { ocd: true })
  }

  return new Promise((resolve, reject) => {
    console.log('Writing', file)
    fs.writeFile(path.join(dist, file), body, error => {
      if (error) {
        reject(error)
      } else {
        resolve()
      }
    })
  })
}
