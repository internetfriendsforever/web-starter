echo "Syncing assets..."
mkdir -p dist
rsync -r src/assets dist
