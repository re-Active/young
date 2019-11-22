module.exports.function = function insure (insureinput) {
  const console = require('console')
  const http = require('http')
  const url = 'https://shh-mongodb.herokuapp.com/simplefin'
  const insure = http.getUrl(url, {format: 'json'})[1].item.insure
  const insuredict = {
    "정기/종신보험": "정기/종신보험",
    "연금보험": "연금보험",
    "상해보험": "상해보험",
    "인터넷보험": "인터넷보험",
  }
  console.log(insure)

  let insureset = []
  for(i in insure) {
    console.log(insure[i])
    temp = {}
    temp.category = insuredict[i]
    temp.insuresubset = []
    // console.log(insuredict[i])
    for(j in insure[i]){
      temp.insuresubset.push(insure[i][j])
    }
    // temp.insuresubset = insure[i]
    console.log(temp)
    insureset.push(temp)
  }

  console.log(insureset)

  return {
    insureset: insureset
  }
}