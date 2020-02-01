// This file is to combine data and options,
// so it's gonna be a lot easier to validate
module.exports = (data, options) => {
  const dataAndValidationOptions = {}

  Object.keys(options).forEach(key => {
    dataAndValidationOptions[key] = {
      data: data[key] ? data[key] : null,
      options: options[key]
    }
  })

  return dataAndValidationOptions
}
