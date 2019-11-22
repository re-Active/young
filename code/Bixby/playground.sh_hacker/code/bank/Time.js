module.exports.function = function time (timeinput) {
  const console = require('console')
  const http = require('http')
  const url = 'https://shh-mongodb.herokuapp.com/simplefin'
  const bank = http.getUrl(url, {format: 'json'})[1].item.deposit

  console.log(bank)
  let timeset = []
  for(i in bank['정기예금']) {
    timeset.push(bank['정기예금'][i])
  }

  return {
    timeset:timeset
  }
}