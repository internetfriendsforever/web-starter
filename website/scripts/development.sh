mkdir -p dist
concurrently\
  "./scripts/serve.sh" \
  "./scripts/watch-assets.sh" \
  "./scripts/watch-build.sh"
