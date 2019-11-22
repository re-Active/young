module.exports.function = function myInsure(myinsureinput) {
  const db = require('./fake/fakedb').myinsure
  const console = require('console')
  const http = require('http')
  const target = '/v1/contract/list'
  const url = 'http://10.3.17.61:8083'
  const params = {
    "dataHeader": {

    },
    "dataBody": {
      "rdreNo": "WmokLBDCO9/yfihlYoJFyg=="
    }
  }
  // const data = http.postUrl(url + target, params, { format: 'json' }).dataBody.retrieveCyberCstConMattCyberCstMattDTO["0"]

  let myinsureset = []
  // for(i in data){
  //   temp = {
  //     apaicnltnpfe: data.apaicnltnpfe,
  //     ccramam: data.ccramama,
  //     coornm: data.coornm,
  //     eprtinsam: data.eprtinsam,
  //     etncymd: data.etncymd,
  //     inonno: data.inonno,
  //     intynm: data.intynm,
  //     mnnpnm: data.mnnpnm,
  //   }
  //   myinsureset.push(temp)
  // }
  myinsureset = db
  
  return {
    myinsureset: myinsureset
  }
}
