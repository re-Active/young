module.exports.function = function rec (target, cred) {
  const rectools = require('./tools.js')

  let res
  if(target === "은행") {
    res = rectools.recbank(cred)
  } else if(target === "보험") {
    res = rectools.recbank(cred)
  } else {
    res = rectools.recins(cred)
  }

  return res
}
