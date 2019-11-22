module.exports.function = function regular (regularinput) {
  const console = require('console')
  const http = require('http')
  const url = 'https://shh-mongodb.herokuapp.com/simplefin'
  const bank = http.getUrl(url, {format: 'json'})[1].item.insure
  console.log(bank)
  let regularset = []
  for(i in bank['정기/종신보험']) {
    regularset.push(bank['정기/종신보험'][i])
  }

  return {
    regularset:regularset
  }
}