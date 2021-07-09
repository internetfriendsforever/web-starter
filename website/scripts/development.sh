mkdir -p dist
npx concurrently\
  "node ./scripts/serve" \
  "./scripts/watch-assets.sh" \
  "./scripts/watch-build.sh"
