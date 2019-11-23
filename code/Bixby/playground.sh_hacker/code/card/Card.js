module.exports.function = function card(cardinput) {
  const console = require('console')
  const http = require('http')
  const url = 'https://shh-mongodb.herokuapp.com/simplefin'
  const card = http.getUrl(url, { format: 'json' })[1].item.card
  const carddict = {
    "체크카드": "체크카드",
    "신용카드": "신용카드",
  }
  console.log(card)

  const cardurl = [
    'https://www.shinhancard.com/_ICSFiles/afieldfile/2019/09/19/pc_card_600x380.png',
    'https://www.shinhancard.com/_ICSFiles/afieldfile/2018/07/26/card_deep_pc2.png',
    'https://www.shinhancard.com/_ICSFiles/afieldfile/2018/07/13/card_theace.png',
    'https://www.shinhancard.com/_ICSFiles/afieldfile/2018/07/13/dream(96dpi)_1.png',
    'https://www.shinhancard.com/_ICSFiles/afieldfile/2019/05/23/190520_pc_deeponcheck_cardplate.png',
    'https://www.shinhancard.com/_ICSFiles/afieldfile/2019/06/04/0604_600x380.png'
  ]
  let cardset = []
  for (i in card) {
    console.log(card[i])
    temp = {}
    temp.category = carddict[i]
    temp.cardsubset = []
    temp.url = cardurl[i]
    console.log(cardurl[i])
    // console.log(carddict[i])
    for (j in card[i]) {
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
