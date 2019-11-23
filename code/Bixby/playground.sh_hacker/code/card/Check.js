module.exports.function = function check(checkinput) {
  const console = require('console')
  const http = require('http')
  const url = 'https://shh-mongodb.herokuapp.com/simplefin'
  const bank = http.getUrl(url, { format: 'json' })[1].item.card
  console.log(bank)

  const cardurl = [
    'https://www.shinhancard.com/_ICSFiles/afieldfile/2018/07/13/dream(96dpi)_1.png',
    'https://www.shinhancard.com/_ICSFiles/afieldfile/2019/05/23/190520_pc_deeponcheck_cardplate.png',
    'https://www.shinhancard.com/_ICSFiles/afieldfile/2019/06/04/0604_600x380.png'
  ]
  let j = 0
  let checkset = []
  for (i in bank['체크카드']) {
    console.log(cardurl[j])
    bank['체크카드'][i].url = cardurl[j]
    j ++
    checkset.push(bank['체크카드'][i])
  }

  return {
    checkset: checkset
  }
}