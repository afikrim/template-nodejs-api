const express = require('express')

const router = express.Router()

// App config
const config = require('../config').app

// Define root route
router.get('/', (req, res) => {
  return res.json({
    app: {
      name: config.name,
      version: config.version
    }
  })
})

module.exports = router
