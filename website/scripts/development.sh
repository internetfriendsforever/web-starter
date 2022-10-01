mkdir -p dist
npx concurrently\
  "node scripts/server.js" \
  "node scripts/serve.js" \
  "./scripts/watch.sh"
