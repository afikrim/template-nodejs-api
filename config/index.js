const app = require('./app')
const process = require('./process')
const database = require('./database')

const { debug } = require('../env')

const NODE_ENV = debug ? 'development' : 'production'

module.exports = {
  // App config
  app,

  // Process config
  process,

  // Database config
  database: database[NODE_ENV]
}
