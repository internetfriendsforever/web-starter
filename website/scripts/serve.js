const bs = require('browser-sync').create()

bs.init({
  server: 'dist',
  port: 8000,
  ghostMode: false,
  notify: false,
  open: false,
  reloadDelay: 20,
  serveStaticOptions: {
    extensions: ['html']
  },
  snippetOptions: {
    rule: {
      match: /<\/body>/i,
      fn: (snippet, match) => snippet + match
    }
  }
})
