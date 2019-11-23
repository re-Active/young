module.exports.function = function cardinfo(myinput, cardinfoinput) {
  const rec = require('./tools.js')
  const db = require('./fake/fakedb').cardinfo
  const console = require('console')
  console.log(db)
  const http = require('http')
  const target = '/v1/mycard/searchavailablecard'
  const target_detail_dom = '/v1/usedebitcard/searchusefordomestic'
  const target_detail_itn = '/v1/usedebitcard/searchuseforoverseas'
  const cardUrl = 'http://10.3.17.61:8081'
  const params = {
    "dataHeader": {
    },
    "dataBody": {
      "nxtQyKey": ""
    }
  }
  const params_dom = {
    "dataHeader": {
    },
    "dataBody": {
      "nxtQyKey": "",
      "bctag": "0",
      "inqterm": "2019050720190805"
    }
  }
  const params_itn = {
    "dataHeader": {
    },
    "dataBody": {
      "nxtQyKey": "",
      "fromdate": "20190507",
      "todate": "20190830",
      "bctag": "0"
    }
  }

  let data
  let cardinfo = {
    debit: [],
    credit: []
  }

  let inc
  try {
    data = http.postUrl(cardUrl + target, params, { format: 'json' }).dataBody.grp001
    for (i in data) {
      if (data[i].cardgubun === 5) {
        var temp_inc30 = http.postUrl(cardUrl + target_detail_dom, params_dom, { format: 'json' }).dataBody
        var temp_inc60 = http.postUrl(cardUrl + target_detail_dom, params_dom, { format: 'json' }).dataBody
        inc = (temp_inc30 / temp_inc60 - 1 * 100)
        temp = {
          name: data[i]["cardname"],
          cardno: data[i]["cardNo"],
          inc: toString(inc) + '% 만큼 이번달 사용량이 변화하였습니다.'
        }
        cardinfo.debit.push(temp)
      } else {
      var temp_inc30 = http.postUrl(cardUrl + target_detail_dom, params_dom, { format: 'json' }).dataBody
        var temp_inc60 = http.postUrl(cardUrl + target_detail_dom, params_dom, { format: 'json' }).dataBody
        inc = (temp_inc30 / temp_inc60 - 1 * 100)
        temp = {
          name: data[i]["cardname"],
          cardno: data[i]["cardNo"],
          inc: '사용량이' + toString(inc) + '% 만큼 변화하였습니다.'
        }
        cardinfo.credit.push(temp)
      }
    }
  } catch (e) {
    console.log(e)
  } finally {
    data = db
  }
  console.log(data)


  // const cred = '주민등록번호'
  // const recommend = rec.rec('카드', cred)
  return data
}
