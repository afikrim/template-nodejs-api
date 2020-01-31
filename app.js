const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')

// Define app
const app = express()

// Call all routes
const routes = require('./routes')

// Log Http request
app.use(logger('dev'))

// Prevent vulnerabilities from header
app.use(helmet())

// Parsing body from json to js Object
app.use(bodyParser.json())

// Parsing body from url-encoded to js Object
app.use(bodyParser.urlencoded({ extended: true }))

// Prevent cors vulnerable
app.use(cors())

// Add routes to express application
app.use('/', routes)

module.exports = app
