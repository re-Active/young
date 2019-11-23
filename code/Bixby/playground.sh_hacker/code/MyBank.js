module.exports.function = function mybank(mybankinput) {
  const rec = require('./tools.js')
  const db = require('./fake/fakedb').bank
  const console = require('console')
  const http = require('http')
  const bankUrl = 'http://10.3.17.61:8080'

  const target = [
    '/v1/account/deposit/detail',
    '/v1/account/loan/detail',
    '/v1/account/fund/detail',
    '/v1/account/investment-trust/detail',
    '/v1/account/isa/detail'
  ]
  const params = [
 {
"dataHeader":{},
"dataBody":
{
 "serviceCode":"D1130",
 "정렬구분":"1",
 "조회시작일":"20190228",
 "조회종료일":"20190830",
 "조회기간구분":"1",
 "은행구분":"1",
 "계좌번호":"230221966424"
}
 },
{
"dataHeader":{},
"dataBody":
{
 "업무구분":"01",
 "고객번호":"0741831215",
 "은행구분":"1",
 "계좌번호":"110180148200",
 "조회기간구분":"1",
 "조회시작일":"20190925",
 "조회종료일":"20190925",
 "정렬구분":"1",
}
},
{
"dataHeader":{},
"dataBody":
{
 "거래구분":"1",
 "계좌번호":"250132675998",
 "은행구분":"1",
 "미기장거래":"1",
 "직원조회":"1",
 "정렬구분":"2"
}
},
{
"dataHeader":{},
"dataBody":
{
 "고객번호":"0642423512",
 "거래구분":"1",
 "은행구분":"1",
 "계좌번호":"299011373321", 
 "직원여부":"1",
 "정렬구분":"1",
}
},
{
"dataHeader":
{
},
"dataBody":
{
"고객번호":"0741831215",
"업무구분":"01",
"조회구분":"00",
"계좌번호":"269000015682",
"시작일자":"20190826",
"종료일자":"20190926",
"거래유형":"99",
"조회건수":"00000"
}
}]

const cats = {
  '예/적금': [], 
  '대출': [], 
  '펀드': [],
  '신탁': [],
  'ISA': []
}

  let data
  try {
    for(i=0; i<5; i++){
      data = http.postUrl(bankUrl+target[i], params[i], {format: 'json'}).dataBody
      cats[i].push({
        accountno: data["계좌번호"],
        rate: data["이율"],
        balance: data["계좌잔액금액"]
      })
    }
  } catch(e) {
    console.log(e)
    console.log('bbb')
  } finally {
    cats = db
    console.log('cc')
  }

  console.log(db)
  // balanceset = []
  // for(i in data){
  //   temp = {
  //     category: catdict[data[i]["예금종류"]],
  //     name: data[i]["과목명"],
  //     balance: data[i]["잔액"],
  //     accountno: data[i]["계좌번호"]
  //   }

  //   balanceset.push(temp)

  // }
  // console.log(balanceset)
  // console.log(rec)



  // const cred = '주민등록번호'
  // const recommend = rec.recbank(cred)
  
<<<<<<< HEAD
  cats.recommend = ['']
=======
  cats.recommend = ''

>>>>>>> 1e328dea10bd2dba1cbb2f7105f0ae972d4b6374

  return cats
}
