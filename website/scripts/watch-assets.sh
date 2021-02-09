npx chokidar \
  "src/assets/**/*.*" \
  --command './scripts/sync-assets.sh && npx browser-sync reload --port 8000' \
  --initial \
  --debounce 20 \
  --silent
