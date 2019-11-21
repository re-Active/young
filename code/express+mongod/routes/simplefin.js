const express = require('express')
const router = express.Router()
const SimpleFin = require('../models/simplefin')

router.get('/', function(req, res) {
  SimpleFin.find(function(err, info) {
    if (err) { return res.status(500).send({ error: fail }) }
    res.json(info)
  })
})

router.post('/', function(req, res) {
  let fin = new SimpleFin()
  console.log(typeof(req.body.item))

  fin.item = req.body.item
  fin.save(function(err) {
    if (err) {
      res.status(400).json({ result: 'error' })
      return
    }

    res.status(200).json({ result: 1 })
  })
})

module.exports = router