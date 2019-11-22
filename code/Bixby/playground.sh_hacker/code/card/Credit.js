module.exports.function = function credit (creditinput) {
  const console = require('console')
  const http = require('http')
  const url = 'https://shh-mongodb.herokuapp.com/simplefin'
  const bank = http.getUrl(url, {format: 'json'})[1].item.card
  console.log(bank)
  let creditset = []
  for(i in bank['신용카드']) {
    creditset.push(bank['신용카드'][i])
  }

  return {
    creditset:creditset
  }
}