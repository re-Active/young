module.exports.function = function check (checkinput) {
  const console = require('console')
  const http = require('http')
  const url = 'https://shh-mongodb.herokuapp.com/simplefin'
  const bank = http.getUrl(url, {format: 'json'})[1].item.card
  console.log(bank)
  let checkset = []
  for(i in bank['체크카드']) {
    checkset.push(bank['체크카드'][i])
  }

  return {
    checkset:checkset
  }
}