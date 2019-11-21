module.exports.function = function bank (bankinput) {
  const db = require('./db.js')
  const console = require('console')
  const http = require('http')
  const url = 'https://shh-mongodb.herokuapp.com/simplefin'
  const bank = http.getUrl(url, {format: 'json'})[1].item.deposit
  // console.log(bank)
 
  // const bank = db.data["예금"]

  let bankset = []
  for(idx in bank){
    for(jdx in bank[idx]){
      let temp = bank[idx][jdx]
      bankset.push(temp)
    }
  }

  // console.log(bankset)

  return {
    bankset: bankset
  }
}
