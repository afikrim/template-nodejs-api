/* eslint-disable radix */
module.exports = (req, res, data) => {
  // Define base url
  const fullUrl = `${req.protocol}://${req.get('host')}`
  // Define array for all query request
  const urlQuery = []

  // Define links, in links we store links for pagination
  const links = {}
  // Define body object that will be send
  const body = {}

  // Loop all query request and store it to
  // urlQuery array
  Object.keys(req.query).forEach(key => {
    if (key !== 'page') {
      urlQuery.push({
        key,
        value: req.query[key]
      })
    }
  })

  // Define total data perpage
  let total = data.length / req.query.paginate
  if (total % 1 !== 0) {
    total += 1 - (total % 1)
  }

  // Define meta, in meta we store info for pagination
  const metas = {
    prev:
      parseInt(req.query.page) - 1 <= 0 ? null : parseInt(req.query.page) - 1,
    current: parseInt(req.query.page),
    next:
      parseInt(req.query.page) + 1 > total
        ? null
        : parseInt(req.query.page) + 1,
    first: 1,
    last: total <= 1 ? 1 : total,
    from:
      parseInt(req.query.page) * parseInt(req.query.paginate) -
      parseInt(req.query.paginate) +
      1,
    to:
      parseInt(req.query.page) * parseInt(req.query.paginate) > data.length
        ? data.length
        : parseInt(req.query.page) * parseInt(req.query.paginate),

    total: data.length
  }

  // Remake url for pagination
  urlQuery.forEach(query => {
    if (query.key === urlQuery[0].key) {
      links.prev = metas.prev ? `${fullUrl}?page=${metas.prev}` : null
      links.next = metas.next ? `${fullUrl}?page=${metas.next}` : null
      links.first = `${fullUrl}?page=${metas.first}`
      links.last = `${fullUrl}?page=${metas.last}`
    }

    links.prev = links.prev ? `${links.prev}&${query.key}=${query.value}` : null
    links.next = links.next ? `${links.next}&${query.key}=${query.value}` : null
    links.first = links.first
      ? `${links.first}&${query.key}=${query.value}`
      : null
    links.last = links.last ? `${links.last}&${query.key}=${query.value}` : null
  })

  // Slice data that will be shown
  body.data = data.slice(
    metas.current * req.query.paginate - req.query.paginate,
    metas.current * req.query.paginate
  )
  body.metas = metas
  body.links = links

  // Returning json response
  return res.json(body)
}
