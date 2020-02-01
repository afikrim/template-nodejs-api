/* eslint-disable no-param-reassign */
const validator = require('validator')

const makeValidation = require('./makeValidation')
const sequelize = require('../../database')

// Define validate function
const validate = (data, options) => {
  // Define dataAndValidationOptions variable and fill it with
  // reconstruct object
  const dataAndValidationOptions = makeValidation(data, options)

  // Define error variable to store any errors
  const error = {}

  // Loop all data in dataAndValidationOptions and send
  // it to checkErrors function to check is there
  // any errors
  Object.keys(dataAndValidationOptions).forEach(key => {
    const temp = dataAndValidationOptions[key]
    error[key] = checkErrors(key, temp.data, temp.options)
  })

  // Define fails function to tell user, is successfully
  // validate or not
  const fails = () => {
    // Define fail variable to tell if the check is failed
    let fail = false

    // Loop all data in error variable and then check
    // every validation that makes by user. Does it
    // have error or not
    Object.keys(error).forEach(key => {
      if (Object.keys(error[key]).length > 0) {
        fail = true
      }
    })

    return fail
  }

  // Define errors function to return values from error
  // variable
  const errors = () => {
    return error
  }

  // Returning fails and errors function
  return {
    fails,
    errors
  }
}

// Define checkErrors function
const checkErrors = (key, data, options) => {
  // Define error variable
  const error = {}

  // Loop all data in options variable and try to catch it
  // with if selection
  Object.keys(options).forEach(option => {
    // Check isRequired
    if (option === 'isRequired') {
      if (options[option]) {
        if (!data) {
          error[option] = `${key} is required`
        }
      }
    }

    // Check isEmail
    if (option === 'isEmail') {
      if (options[option]) {
        if (!validator.isEmail(data)) {
          error[option] = `${key} is not a valid email`
        }
      }
    }

    // Check uniqueIn a table
    if (option === 'uniqueIn') {
      if (options[option]) {
        // Define collection variable to store all table data
        let collection

        // Determine this is an update process or a create process
        if (data.id) {
          // If it was update process, then get all data except
          // it's own data
          collection = sequelize.query(
            `SELECT ${key} FROM ${options[option]} WHERE id >< ${data.id}`,
            { type: sequelize.QueryTypes.SELECT }
          )
        } else {
          // If it was create process, then get all data
          collection = sequelize.query(
            `SELECT ${key} FROM ${options[option]}`,
            { type: sequelize.QueryTypes.SELECT }
          )
        }

        // Checking data. is that already in the table or not
        if (data in collection) {
          error[option] = `${key} already in use`
        }
      }
    }

    // Check a data with custom regular expression
    if (option === 'regex') {
      if (options[option]) {
        if (!validator.matches(data, options[option])) {
          error[option] = `${key} does not match pattern`
        }
      }
    }
  })

  return error
}

module.exports = validate
