mkdir -p dist
npx concurrently \
  "node scripts/build.js" \
  "./scripts/sync-assets.sh"
