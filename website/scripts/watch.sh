npx chokidar \
  "src/**/*" \
  "build.js" \
  --command 'npx browser-sync reload --port 8000'
  --initial \
  --debounce 20 \
  --silent
