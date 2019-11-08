const fs = require('fs')
const { join } = require('path')

const pkg = require('../dist/ngx-scrolltop/package.json')

// pkg.name = `@bartholomej/${pkg.name}`
pkg.publishConfig = {}
pkg.publishConfig.registry = `https://npm.pkg.github.com/@bartholomej`

fs.writeFileSync(
  join(__dirname, '../package.json'),
  JSON.stringify(pkg, null, 2)
)
