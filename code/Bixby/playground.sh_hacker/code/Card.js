module.exports.function = function card (cardinput) {
  const http = require('http')
  const url = 'https://shh-mongodb.herokuapp.com/simplefin'
  const card = http.getUrl(url, {format: 'json'})[1].item.card

  let cardset = []
  for(idx in card){
    for(jdx in card[idx]){
      let temp = card[idx][jdx]
      cardset.push(temp)
    }
  }
  return {
    cardset:cardset
  }
}
