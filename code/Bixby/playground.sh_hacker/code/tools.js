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
  // for (i in data.dataBody.grp001) {
  //   temp = {
  //     aprvamt: data[i].aprvamt,
  //     retlno: data[i].retlno
  //   }
  //   cardbalanceset.push(temp)
  // }
 
  cardbalanceset = [
    {
      "aprvamt": '20,000',
      "retlno": '카카오'
    },
    {
      "aprvamt": '50,000',
      "retlno": '다음'
    },
    {
      "aprvamt": '90,000',
      "retlno": '라인'
    }
  ]

  return {
    cardbalanceset: cardbalanceset
  }
}


module.exports.recbank = function(cred) {
  const res = "적금 비율이 평균보다 다소 높아요."
  return res
}

module.exports.reccard = function(cred) {
  const res = "신용카드보다는 체크카드를 더 사용해보세요."
  return res
}

module.exports.recins = function(cred) {
  const res = "보장성 보험을 줄이는 게 좋겠어요."
  return res
}

module.exports.rec = function (target, cred) {
  const rectools = require('./tools.js')

  let res
  if(target === "은행") {
    res = rectools.recbank(cred)
  } else if(target === "보험") {
    res = rectools.recins(cred)
  } else {
    res = rectools.reccard(cred)
  }

  return res
}
