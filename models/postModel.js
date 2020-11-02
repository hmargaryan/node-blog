const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchem = new Schema({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
}, { timestamps: true })

const Post = mongoose.model('Post', postSchem)
module.exports = Post