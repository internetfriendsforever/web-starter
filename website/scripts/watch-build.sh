npx chokidar \
  "src/**/*.js" \
  "build.js" \
  --ignore 'src/assets/**/*.*' \
  --command 'node --experimental-json-modules scripts/build.js && npx browser-sync reload --port 8000' \
  --initial \
  --debounce 20 \
  --silent
