module.exports.function = function insure (insureinput) {
  const http = require('http')
  const url = 'https://shh-mongodb.herokuapp.com/simplefin'
  const insure = http.getUrl(url, {format: 'json'})[1].item.insure

  let insureset = []
  for(idx in insure){
    for(jdx in insure[idx]){
      let temp = insure[idx][jdx]
      insureset.push(temp)
    }
  }
  return {
    insureset:insureset
  }
}
