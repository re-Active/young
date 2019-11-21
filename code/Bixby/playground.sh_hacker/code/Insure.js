module.exports.function = function insure (insureinput) {
  const http = require('http')
  const url = 'URL'
  const insure = http.getUrl(url, {format:"json", cacheTime: 0}).data.insure

  return insure
}
