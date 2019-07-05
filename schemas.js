//pseudocode
// user- name, image, origin, date signed up, interests
// gem- image, location, date, country?, likes, comments
// phrases- phrase
// chat- text, user, image

//
// const mongoose = require('mongoose')
//
//
// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true },
//   image: { },
//   lang: { type: String, required: true },
//   dateSignedUp: { type: String, required: true },//or time?
//   interests: { type: String, maxlength: 200 }
// }, {
//   timestamps: true //notsure if need
// })
//
// const gemSchema = new mongoose.Schema({
//   image: { type: String, required: true },
//   location: { type: String, required: true },
//   date: { type: String, required: true },
//   country: { type: String, required: true },
//   likes: [ likeSchema ],
//   comments: [ commentSchema ]
// }, {
//   timestamps: true //notsure if need
// })
//
// const phraseSchema = new mongoose.Schema({
//   phrase: { type: String, required: true }
// })
//
// const chatSchema = new mongoose.Schema({
//   text: { type: String, required: true },
//   user: { },
//   image: { }
// })
//
//
//
// const commentSchema =  new mongoose.Schema({
//   text: { type: String, required: true },
//   user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
// } ,{
//   timestamps: true
// })
//
// const likeSchema = new mongoose.Schema({
//   user: { type: mongoose.Schema.ObjectId, ref: 'User' }
// })
