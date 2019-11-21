module.exports.function = function bank (bankinput) {
  const db = require('./db.js')
  const console = require('console')
  const http = require('http')
  const url = 'https://express-mongo-api123.herokuapp.com/test'
 
  const bank = db.data["예금"]

  let bankset = []
  for(idx in bank){
    for(jdx in bank[idx]){
      let temp = bank[idx][jdx]
      bankset.push(temp)
    }
  }

  console.log(bankset)

  return {
    bankset: bankset
  }
}
