module.exports.function = function card (cardinput) {
  const console = require('console')
  const http = require('http')
  const url = 'https://shh-mongodb.herokuapp.com/simplefin'
  const card = http.getUrl(url, {format: 'json'})[1].item.card
  const carddict = {
    "체크카드": "체크카드",
    "신용카드": "신용카드",
  }
  console.log(card)

  let cardset = []
  for(i in card) {
    console.log(card[i])
    temp = {}
    temp.category = carddict[i]
    temp.cardsubset = []
    // console.log(carddict[i])
    for(j in card[i]){
      temp.cardsubset.push(card[i][j])
    }
    // temp.cardsubset = card[i]
    console.log(temp)
    cardset.push(temp)
  }

  console.log(cardset)

  return {
    cardset: cardset
  }
}
