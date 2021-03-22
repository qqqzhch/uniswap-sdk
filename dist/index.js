
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./uniswapsdk.cjs.production.min.js')
} else {
  module.exports = require('./uniswapsdk.cjs.development.js')
}
