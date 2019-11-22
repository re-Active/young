module.exports.function = function cardinfo(cardinfoinput) {
  const db = require('./fake/fakedb').card
  const console = require('console')
  const http = require('http')
  const target = '/v1/mycard/searchavailablecard'
  const cardUrl = 'http://10.3.17.61:8081'
  const params = {
    "dataHeader": {
    },
    "dataBody": {
      "nxtQyKey": ""
    }
  }

  let data
  try {
    data = http.postUrl(cardUrl + target, params, { format: 'json' }).dataBody.grp001
  } catch (e) {
    console.log(e)
  } finally {
    data = db
  }

  cardinfoset = []
  for(i in data){
    temp = {
      category: data[i]["cardgubun"],
      name: data[i]["cardname"],
      cardno: data[i]["cardNo"]
    }

    cardinfoset.push(temp)

  }
  return {
    cardinfoset: cardinfoset
  }
}
