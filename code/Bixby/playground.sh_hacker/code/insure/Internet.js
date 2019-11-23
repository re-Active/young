module.exports.function = function internet (internetinput) {
  const console = require('console')
  const http = require('http')
  const url = 'https://shh-mongodb.herokuapp.com/simplefin'
  const bank = http.getUrl(url, {format: 'json'})[1].item.insure
  console.log(bank)
  let internetset = []
  for(i in bank['인터넷보험']) {
    internetset.push(bank['인터넷보험'][i])
  }

  return {
    internetset:internetset
  }
}