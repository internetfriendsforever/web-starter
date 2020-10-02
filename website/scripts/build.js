console.log('Build started')
console.time('Build complete')

const fs = require('fs')
const path = require('path')
const child = require('child_process')

build(path.join(__dirname, '..'))

async function build (project) {
  const dist = path.join(project, 'dist')
  const src = path.join(project, 'src')

  child.execSync(`mkdir -p ${dist}`)
  child.execSync(`rsync -r ${path.join(src, 'assets')} ${dist}`)

  const files = await (require(path.join(src, 'render')))()

  await Object.keys(files).map(file => {
    const body = files[file]
    return write(dist, file, body)
  })

  console.timeEnd('Build complete')
}

function write (dir, file, body) {
  const out = path.join(dir, file)

  return new Promise((resolve, reject) => {
    console.log('Writing', file)
    child.execSync(`mkdir -p ${path.dirname(out)}`)
    fs.writeFile(out, body, error => {
      if (error) {
        reject(error)
      } else {
        resolve()
      }
    })
  })
}
