module.exports.bank = {
  deposit: [
    {
      accountno: '1234-56789',
      rate: '1.9%',
      balance: 'cc',
      comments: {
        url: '/green.png',
        comment: '전체 자산 중 예금의 비율이 안정적입니다.'
      }
    },
  ],
  fund: [
    {
      accountno: '7896-54123',
      rate: '3.2%',
      balance: '',
      comments: {
        url: '/yellow.png',
        comment: '전체 자산 중 위험자산인 펀드의 비율이 평��적입니다.'
      }
    },
  ],
  isa: [
    {
      accountno: '',
      rate: '',
      balance: ''
    },
  ],
  loan: [
    {
      accountno: '741-5896-32',
      rate: '3.5%',
      balance: '5,000,000',
      comments: {
        url: '/red.png',
        comment: '전체 자산 중 부채의 비율이 다소 높습니다.'
      }
    },
  ],
  trust: [
    {
      accountno: '',
      rate: '',
      balance: ''
    },
  ]
}

// module.exports.card = [
//   {
//     "cardgubun": '체크카드',
//     "cardname": 'fakeCheck',
//     "cardNo": '123-456-789',
//     "inc": ""
//   },
//   {
//     "cardgubun": '신용카드',
//     "cardname": 'fakeCredit',
//     "cardNo": '456-789-123',
//     "inc": ""
//   },
// ]

module.exports.cardinfo = {
  "debit": [
    {
      name: 'fakeDebit',
      cardno: '123-456-789',
      inc: "사용량이 3% 변화하였습니다."
    },
    {
      name: 'fakeDebit',
      cardno: '234-456-789',
      inc: "사용량이 -5% 변화하였습니다."
    },
  ],
  "credit": [
    {
      name: 'fakeCredit',
      cardno: '345-456-789',
      inc: "사용량이 1% 변화하였습니다."
    },
    {
      name: 'fakeCredit',
      cardno: '456-456-789',
      inc: "사용량이 -2% 변화하였습니다."
    },
  ]
}


module.exports.myinsure = [
  ///////////// 1 ////////////
  {
    apaicmltinpfe: '5',
    eprtinsam: '1150',
    intynm: '암보험(무배당, 해지환급금 미지급형',
    crisis: {
      url: '',
      comment: '비슷한 종류의 보장 상품과 비교하였을 때 보험료 대비 보험금이 낮습니다.'
    },
    // crisis2: 0.3,
    // crisis3: '',
    description: '보험기간　만기시　피보험자（보험대상자）가　살아있을　때 기납입 주계약보험료의 ５０％ \ 보험기간　중　피보험자（보험대상자）가　암（백혈병ㆍ골수암　포함'
  },
  {
    apaicmltinpfe: '80.4',
    eprtinsam: '3000',
    intynm: '신한굿라이프종신보험(무배당,해지환급금미지급형)',
    crisis: '비슷한 종류의 다른 상품과 비교하였을 때 보험료 대비 보험금이 높습니다.',
    // crisis2: '',
    // crisis3: '',
    description: '기타피부암，　갑상선암，　제자리암，　경계성종양으로　진단확정　되었을　때 \ （암［백혈병·골수암　포함］，　기타피부암，　갑상선암，｜　백혈병·골수암　\ 제자리암　및　경계성종양　각각　최초１회에　한함）｜&nbsp'
  },

  /////////// 2 /////////////
  // {
  //   apaicmltinpfe: '2.8',
  //   eprtinsam: '1150',
  //   intynm: '암보험(무배당)',
  //   crisis: '0.5',
  //   // crisis2: '',
  //   // crisis3: '',
  //   description: '보험기간　중　피보험자（보험대상자）가　＇자전거교통재해　이외의　교통재해＇로　인하여 장해분류표에서　정한　각　장해지급률에　해당하는　장해상태가　되었을　때'
  // },
  // {
  //   apaicmltinpfe: '55.4',
  //   eprtinsam: '3000',
  //   intynm: 'Stage 6大건강종신보험(무배당,해지환급금일부지급형)',
  //   crisis: '0.9',
  //   // crisis2: '',
  //   // crisis3: 0.8,
  //   description: '보험기간　중　피보험자（보험대상자）가　질병　및　재해분류표에서　정하는　질병 또는　재해로　인하여　그　치료를　직접목적으로　４일이상　계속하여　입원시'
  // },
]
