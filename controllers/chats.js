const Chat = require('../models/chat')
require('dotenv').config()
const key = process.env.YANDEX_API_KEY
const axios = require('axios')

// <<< CHAT >>>
// INDEX
function indexRoute(req, res) {
  Chat
    .find()
    .then(chats => res.status(200).json(chats))
    .catch(err => res.status(404).json(err))
}

// SHOW
function showRoute(req, res) {
  req.body.user = req.currentUser

  Chat
    .findById(req.params.chatId)
    .then(chat => {
      if (req.currentUser.lang === 'vi') {
        chat.comments.map(comment => {
          axios.get(encodeURI(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${key}&text=${comment.text}&lang=en-vi`))
            .then(comment => {
              console.log(comment.data.text.join('+'))
            })
        })
      }
      console.log(chat.comments)
      return chat.comments
    })
    .then(chat => res.status(200).json(chat))
    .catch(err => res.status(400).json(err))
}

//<<< CHAT COMMENTS >>>
// COMMENT: CREATE
function commentCreateRoute(req, res) {
  req.body.user = req.currentUser
  Chat
    .findById(req.params.chatId)
    .then(chat => {
      if (!chat) res.status(404).json({ message: 'Not found' })
      chat.comments.push(req.body)
      chat.save()
    })
    .then(chat => res.status(201).json(chat))
    .catch(err => res.status(422).json(err))
}


// COMMENT: DELETE
function commentDeleteRoute(req, res) {
  req.body.user = req.currentUser
  Chat
    .findById(req.params.chatId)
    .populate('user')
    .then(chat => {
      if (!chat) res.status(404).json({ message: 'Not found' })
      const comment = chat.comments.id(req.params.commentId)
      if (!comment) res.status(404).json({ message: 'Not found' })
      if (!comment.user.equals(req.currentUser._id)) return res.status(401).json({ message: 'Unauthorized' })
      comment.remove()
      return chat.save()
    })
    .then(() => res.status(200).json({ message: 'Comment deleted' }))
    .catch(err => res.status(422).json(err))
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  commentCreate: commentCreateRoute,
  commentDelete: commentDeleteRoute
}
