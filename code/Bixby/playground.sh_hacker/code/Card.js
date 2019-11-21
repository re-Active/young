module.exports.function = function card (cardinput) {
  const http = require('http')
  const url = 'URL'
  const card = http.getUrl(url, {format:"json", cacheTime: 0}).data.card


  return card
}
