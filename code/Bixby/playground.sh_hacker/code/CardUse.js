module.exports.function = function cardBalance (category, cardno) {
  const console = require('console')
  const tools = require('tools')
  const data = tools.carduse(category, cardno).cardbalanceset
  console.log(data)
  
  let carduseset = []
  for(i in data){
    console.log(data[i])
    carduseset.push(data[i])
  }

  return {
    carduseset: carduseset
  }
}
