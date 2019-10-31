function getEndpoint(url) {
  return fetch(url)
    .then(res => res.json())
    .then(data => {
      if (!data) {
        throw new Error('There was an error fetching the endpoint')
      }
      return data
    })
} 

export function getMergedEndpoints(urls) {
  return Promise.all([
    getEndpoint(urls[0]),
    getEndpoint(urls[1]),
  ]).then(([profile, comments]) => ({
    profile,
    comments
  }))
}
