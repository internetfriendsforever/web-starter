import { create } from 'browser-sync'

create().init({
  port: 8000,
  proxy: 'localhost:3000',
  ghostMode: false,
  notify: false,
  open: false,
  reloadDelay: 0
})
