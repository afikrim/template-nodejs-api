module.exports = (res, errors, status = 500) => {
  const response = {
    success: false,
    errors
  }

  res.status(status).json(response)
}
