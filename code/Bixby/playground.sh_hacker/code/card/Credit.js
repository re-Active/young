module.exports.function = function credit (creditinput) {
  const console = require('console')
  const http = require('http')
  const url = 'https://shh-mongodb.herokuapp.com/simplefin'
  const bank = http.getUrl(url, {format: 'json'})[1].item.card
  console.log(bank)
  const cardurl = [
    'https://www.shinhancard.com/_ICSFiles/afieldfile/2019/09/19/pc_card_600x380.png',
    'https://www.shinhancard.com/_ICSFiles/afieldfile/2018/07/26/card_deep_pc2.png',
    'https://www.shinhancard.com/_ICSFiles/afieldfile/2018/07/13/card_theace.png',
  ]
  let j = 0
  let creditset = []
  for(i in bank['신용카드']) {
    bank['신용카드'][i].url = cardurl[j]
    j ++
    creditset.push(bank['신용카드'][i])
  }

  return {
    creditset:creditset
  }
}