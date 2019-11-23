module.exports.bank = {
  deposit: [
    {
      accountno: 'aa',
      rate: 'bb',
      balance: 'cc'
    },
  ],
  fund: [
    {
      accountno: '',
      rate: '',
      balance: ''
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
      accountno: '',
      rate: '',
      balance: ''
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

module.exports.card = [
  {
    "cardgubun": '체크카드',
    "cardname": 'fakeCheck',
    "cardNo": '123-456-789',
  },
  {
    "cardgubun": '신용카드',
    "cardname": 'fakeCredit',
    "cardNo": '456-789-123',
  },
]

module.exports.carduse = [
  {
    category: '체크카드',
    name: 'fakeCheck',
    cardno: '123-456-789',
  },
  {
    category: '신용카드',
    name: 'fakeCredit',
    cardno: '456-789-123',
  },
]

module.exports.myinsure = [
  {
    apaicmltinpfe: '기납입누계',
    eprtinsam: '만기보험금',
    intynm: '보종명',
  },
  {
    apaicmltinpfe: '기납입누계',
    ccramam: '해약환급금',
    coornm: '계약자명',
    eprtinsam: '만기보험금',
    etncymd: '소멸일자',
    inonno: '보험계약번호',
    intynm: '보종명',
    mnnpnm: '주피보험자명',
  },

]
