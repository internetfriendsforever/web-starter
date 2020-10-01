npx chokidar \
  "src/**/*" \
  "build.js" \
  --command 'npm run build' \
  --initial \
  --debounce 20
