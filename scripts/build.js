const { PORT, NODE_ENV, APP_KEY } = require('../config').process

process.env.PORT = PORT
process.env.NODE_ENV = NODE_ENV
process.env.APP_KEY = APP_KEY

require('../bin/www')
