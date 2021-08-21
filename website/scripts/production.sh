mkdir -p dist
npx concurrently \
  "./scripts/build.sh" \
  "./scripts/sync-assets.sh"
