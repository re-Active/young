// model schema
const mongoose = require('mongoose')

const Schema = mongoose.Schema
const simpleFinSchema = new Schema({
  item: {
    tpye: Object
  },

}, { collection: 'simplefin' })

module.exports = mongoose.model('simplefin', simpleFinSchema)