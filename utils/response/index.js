const collection = require('./collection')
const success = require('./success')
const failed = require('./failed')
const file = require('./file')

module.exports = {
  // Send a response for paginate data
  collection,
  // Send a successful response
  success,
  // Send a failed response
  failed,
  // Send file through response
  file
}
