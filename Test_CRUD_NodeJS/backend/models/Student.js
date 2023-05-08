
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let studentSchema = new Schema({
  title: {
    type: String
  },
  content: {
    type: String
  },
  category: {
    type: String
  },
  createAt: { type: Date, default: Date.now() },
}, {
    collection: 'blogs'
  })
  
module.exports = mongoose.model('blogs', studentSchema)