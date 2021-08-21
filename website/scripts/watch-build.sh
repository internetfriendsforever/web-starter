npx chokidar \
  "src/**/*.(js|json)" \
  "build.js" \
  --ignore 'src/assets/**/*.*' \
  --command './scripts/build.sh && npx browser-sync reload --port 8000' \
  --initial \
  --debounce 20 \
  --silent
