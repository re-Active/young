module.exports.function = function balance(balanceinput) {
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
  try {
    data = http.postUrl(bankUrl + target, params, { format: 'json' })
  } catch(e) {
    console.log(e)
  } finally {
    data = db
  }

  balanceset = []
  for(i in data){
    temp = {
      category: data[i].category,
      name: data[i].name,
      balance: data[i].balance,
      accountno: data[i].accountno
    }

    balanceset.push(temp)

  }

  return {
    balanceset: balanceset
  }
}
