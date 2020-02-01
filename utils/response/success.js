module.exports = (res, data, status = 200) => {
  const response = {
    success: true,
    data
  }

  return res.status(status).json(response)
}
