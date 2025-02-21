# npm run build
rm -r docs/assets
rm docs/index.html
rm docs/*.js
rm docs/*.css
cp -r dist/browser/assets docs/assets
cp -r dist/browser/*.js docs
cp -r dist/browser/*.css docs
cp -r dist/browser/index.html docs
