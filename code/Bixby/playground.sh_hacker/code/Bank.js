module.exports.function = function bank (bankinput) {
  const http = require('http')
  const url = 'URL'
  const bank = http.getUrl(url, {format:"json", cacheTime: 0}).data.bank

  return bank
}
