mkdir -p dist
npx concurrently \
  "node --experimental-json-modules scripts/build.js" \
  "./scripts/sync-assets.sh"
