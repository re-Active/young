module.exports.function = function balance(balanceinput) {
  const rec = require('./tools.js')
  const db = require('./fake/fakedb').bank
  const console = require('console')
  const http = require('http')
  const target = '/v1/account/list'
  const bankUrl = 'http://10.3.17.61:8080'
  const params = {
    "dataHeader":
      {},
    "dataBody":
    {
      "serviceCode": "C2010",
      "거래구분": "9",
      "계좌감추기여부": "1",
      "보안계좌조회구분": "2",
      "주민등록번호": "WmokLBDCO9/yfihlYoJFyg=="
    }
  }
  let data
  console.log('aaa')
  try {
    data = http.postUrl(bankUrl + target, params, { format: 'json' }).dataBody["예금내역"]
  } catch(e) {
    console.log(e)
    console.log('bbb')
  } finally {
    data = db
    console.log('cc')
  }

  const catdict = {
    "1": "정기예금",
    "2": "정기적금",
    "3": "보통예금"
  }

  balanceset = []
  for(i in data){
    temp = {
      category: catdict[data[i]["예금종류"]],
      name: data[i]["과목명"],
      balance: data[i]["잔액"],
      accountno: data[i]["계좌번호"]
    }

    balanceset.push(temp)

  }
  console.log(balanceset)
  console.log(rec)

  const cred = '주민등록번호'
  const recommend = rec.recbank(cred)
  console.log(recommend)


  return {
    balanceset: balanceset,
    recommend: recommend
  }
}
