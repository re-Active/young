module.exports.function = function installment (installmentinput) {
  const console = require('console')
  const http = require('http')
  const url = 'https://shh-mongodb.herokuapp.com/simplefin'
  const bank = http.getUrl(url, {format: 'json'})[1].item.deposit

  let installmentset = []
  for(i in bank['정기적금']) {
    installmentset.push(bank['정기적금'][i])
  }

  return {
    installmentset:installmentset
  }
}