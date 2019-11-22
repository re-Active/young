module.exports.function = function accident (accidentinput) {
  const console = require('console')
  const http = require('http')
  const url = 'https://shh-mongodb.herokuapp.com/simplefin'
  const bank = http.getUrl(url, {format: 'json'})[1].item.insure
  console.log(bank)
  let accidentset = []
  for(i in bank['상해보험']) {
    accidentset.push(bank['상해보험'][i])
  }

  return {
    accidentset:accidentset
  }
}