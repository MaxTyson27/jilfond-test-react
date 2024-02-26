const prepareQueryParams = (str) => {
  let searchFor = ''
  let queryStr = ''

  const splitQueries = str.split(', ');

  if (Number.isNaN(+splitQueries[0])) {
    searchFor = 'username'
  } else if (typeof +splitQueries[0] === 'number') {
    searchFor = 'id'
  } else {
    return null;
  }

  splitQueries.forEach((query, idx) => {
    const QUERY = `${searchFor}=${query}`

    if (idx !== 0) {
      queryStr += `&${QUERY}`
    } else {
      queryStr = QUERY
    }
  })

  return queryStr;
}

export { prepareQueryParams };
