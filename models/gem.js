const mongoose = require('mongoose')

const likeSchema =  new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' }
}, {
  timestamps: true
})

const gemSchema = new mongoose.Schema({
  image: { type: String, required: true },
  caption: { type: String, required: true },
  location: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  category: { type: mongoose.Schema.ObjectId, ref: 'Category' },
  likes: [ likeSchema ],
  comments: [ commentSchema ]
}, {
  timestamps: true
})

gemSchema
  .virtual('likeCount')
  .get(function() {
    return this.likes.length
  })

gemSchema.set('toJSON', {
  virtuals: true,
  transform(doc, json) {
    delete json.likes
    return json
  }
})

module.exports = mongoose.model('Gem', gemSchema)
