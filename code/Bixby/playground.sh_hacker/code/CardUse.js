module.exports.function = function cardUse (category, cardno) {
  const rec = require('./tools.js')
  const console = require('console')
  const tools = require('tools')
  const data = tools.carduse(category, cardno).cardbalanceset
  console.log(data)
  
  let carduseset = []
  for(i in data){
    console.log(data[i])
    carduseset.push(data[i])
  }
  const cred = '주민등록번호'
  const recommend = rec.rec('카드', cred)
  return {
    carduseset: carduseset,
    reccomend: recommend
  }
}
