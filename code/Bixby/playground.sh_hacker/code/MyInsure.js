module.exports.function = function myInsure(myinsureinput) {
  const rec = require('./tools.js')
  const tools = require('./tools.js')
  const db = require('./fake/fakedb').myinsure
  const console = require('console')
  const http = require('http')
  var target = '/v1/contract/list'
  const url = 'http://10.3.17.61:8083'
  const detail_target = '/v1/contract/coverage'
  const params = {
    "dataHeader": {
    },
    "dataBody": {
      "rdreNo": "WmokLBDCO9/yfihlYoJFyg=="
    }
  }
  const detail_params = {
    "dataHeader": {
    },
    "dataBody": {
      "totCn": "0", "inqrSc": "1", "inonNo": "WmokLBDCO9/yfihlYoJFyg=="
    }
  }

  // const data = http.postUrl(url + target, params, { format: 'json' }).dataBody.retrieveCyberCstConMattCyberCstMattDTO["0"]
  const data = db
  // const detail = http.postUrl(url + target, params, { format: 'json' }).dataBody['InonNoEnsCt']
  const n = data.length


  // let cri1 = 120
  // let cri2 = 150
  // let cri3 = 180


  // let myins = db
  // for (i = 0; i < n; i++) {
  //   try {
  //     const innono = data[i].intyNm
  //     for (j in detail) {
  //       if ("뇌" in detail[j] || "심근" in detail[j]) {
  //         cri1 += detail[j].furAmSent
  //       } else if ("암" in detail[j]) {
  //         cri2 += detail[j].furAmSent
  //       } else {
  //         cri3 += detail[j].furAmSent
  //       }
  //     }
  //   } catch (e) {
  //     console.log(e)
  //   } finally {
  //     myinsureset = db
  //   }
  // }

  return {
    myinsureset: db,
    recommend: ['']
  }
}
