const Chat = require('../models/chat')

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
  Chat
    .findById(req.params.chatId)
    .then(chat => res.status(200).json(chat))
    .catch(err => res.status(404).json(err))
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
