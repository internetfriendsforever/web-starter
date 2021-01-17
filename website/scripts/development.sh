mkdir -p dist
npx concurrently\
  "./scripts/serve.sh" \
  "./scripts/watch-assets.sh" \
  "./scripts/watch-build.sh"
