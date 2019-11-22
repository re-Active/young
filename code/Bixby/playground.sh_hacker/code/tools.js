module.exports.carduse = function (category, cardno) {
  const http = require('http')
  const url = 'http://10.3.17.61:8081'
  let target
  let params
  if (category === "체크카드") {
    target = '/v1/usedebitcard/searchusefordomestic'
    params = {
      "dataHeader": {
      },
      "dataBody": {
        "nxtQyKey": "",
        "inqterm": "2019050720190805",
        "bctag": "0"
      }
    }
  } else {
    target = '/v1/usecreditcard/searchusefordomestic'
    params = {
      "dataHeader": {
      },
      "dataBody": {
        "nxtQyKey": "",
        "bctag": "0",
        "inqterm": "2019050720190805"
      }
    }
  }

  // const data = http.postUrl(url + target, params, { format: 'json' })
  // let cardbalanceset = []
  // for (i in data) {
  //   temp = {
  //     carduse: data[i].aprvamt,
  //     cardusefor: data[i].retlname
  //   }
  //   cardbalanceset.push(temp)
  // }

  cardbalanceset = [
    {
      carduse: '20,000',
      cardusefor: '카카오'
    },
    {
      carduse: '50,000',
      cardusefor: '다음'
    },
    {
      carduse: '90,000',
      cardusefor: '라인'
    }
  ]

  return {
    cardbalanceset: cardbalanceset
  }
}
