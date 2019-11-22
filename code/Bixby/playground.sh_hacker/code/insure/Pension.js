module.exports.function = function pension (pensioninput) {
  const console = require('console')
  const http = require('http')
  const url = 'https://shh-mongodb.herokuapp.com/simplefin'
  const bank = http.getUrl(url, {format: 'json'})[1].item.insure
  console.log(bank)
  let pensionset = []
  for(i in bank['연금보험']) {
    pensionset.push(bank['연금보험'][i])
  }

  return {
    pensionset:pensionset
  }
}