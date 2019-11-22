module.exports.function = function total (totalinput) {
  const console = require('console')
  const http = require('http')
  const url = 'https://shh-mongodb.herokuapp.com/simplefin'
  const item = http.getUrl(url, {format: 'json'})[1].item

  const bank = item.deposit
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
    // console.log(temp)
    bankset.push(temp)
  }


  const card = item.card
  const carddict = {
    "체크카드": "체크카드",
    "신용카드": "신용카드",
  }
  // console.log(card)

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
    // console.log(temp)
    cardset.push(temp)
  }



  const insure = item.insure
  const insuredict = {
    "정기/종신보험": "정기/종신보험",
    "연금보험": "연금보험",
    "상해보험": "상해보험",
    "인터넷보험": "인터넷보험",
  }
  console.log(insure)

  let insureset = []
  for(i in insure) {
    // console.log(insure[i])
    temp = {}
    temp.category = insuredict[i]
    temp.insuresubset = []
    // console.log(insuredict[i])
    for(j in insure[i]){
      temp.insuresubset.push(insure[i][j])
    }
    // temp.insuresubset = insure[i]
    // console.log(temp)
    insureset.push(temp)
  }

  const banktotalset = {
    category: "예금",
    bankset: bankset
  }

  const cardtotalset = {
    category: "카드",
    cardset: cardset
  }

  const insuretotalset = {
    category: "보험",
    insureset: insureset
  }

  const res = {
    banktotalset: banktotalset,
    cardtotalset: cardtotalset,
    insuretotalset: insuretotalset
  }

  console.log(res)
  return res
}
