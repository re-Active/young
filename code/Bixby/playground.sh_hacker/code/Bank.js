module.exports.function = function bank (bankinput) {
  const console = require('console')
  const http = require('http')
  const url = 'https://shh-mongodb.herokuapp.com/simplefin'
  const bank = http.getUrl(url, {format: 'json'})[1].item.deposit
  const bankdict = {
    "정기적금": "정기적금",
    "정기예금": "정기예금",
    "보통예금": "보통예금"
  }
  // console.log(bank)

  let bankset = []
  for(i in bank) {
    temp = {}
    temp.category = bankdict[i]
    temp.banksubset = []
    // console.log(bankdict[i])
    for(j in bank[i]){
      temp.banksubset.push(bank[i][j])
    }
    // temp.banksubset = bank[i]
    console.log(temp)
    bankset.push(temp)
  }

  console.log(bankset)





  // let bankset = []
  // for(idx in bankdict){
  //   // console.log(bankdict[idx])
  //   for(jdx in bank) {
  //     console.log(bank[jdx])

  //     temp = []
  //     if(bank[jdx].category === bankdict[idx]){
  //       temp.push(bank[jdx])
  //     }
  //   }
  //   bankset.category = bankdict[idx]
  //   bankset.banksubset = temp 
  // }


  // console.log(bankset)
  // res = []
  // for(i in bankset) {
  //   res.push(bankset[i])
  // }
  return {
    bankset: bankset
  }
}
