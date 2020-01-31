const { port, key, debug } = require('../env.js')

module.exports = {
  PORT: port,
  NODE_ENV: debug ? 'development' : 'production',
  APP_KEY: key
}
