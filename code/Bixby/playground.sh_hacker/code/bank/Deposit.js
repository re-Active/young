module.exports.function = function deposit (depositinput) {
  const console = require('console')
  const http = require('http')
  const url = 'https://shh-mongodb.herokuapp.com/simplefin'
  const bank = http.getUrl(url, {format: 'json'})[1].item.deposit

  let depositset = []
  for(i in bank['보통예금']) {
    depositset.push(bank['보통예금'][i])
  }

  return {
    depositset:depositset
  }
}
