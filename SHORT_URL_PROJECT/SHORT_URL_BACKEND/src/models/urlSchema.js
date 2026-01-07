const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    longUrl:{
        type:String,
        required:true
    },
    shortCode:{
      type:String,
      required:true
    }
},{timestamps:true})

module.exports = new mongoose.model('URLs',urlSchema)