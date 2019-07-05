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
    .find(req.params.id)
    .then(chat => res.status(200).json(chat))
    .catch(err => res.status(404).json(err))
}

//<<< CHAT COMMENTS >>>
// COMMENT: CREATE
function commentCreateRoute(req, res) {
  Chat
    .create(req.body)
    .populate('user')
    .then(chat => {
      if (!chat) res.status(404).json({ message: 'Not found' })
      chat.comments.push(req.body)
      chat.save()
    })
    .then(chat => res.status(201).json(chat))
    .chatch(err => res.status(422).json(err))
}


// COMMENT: DELETE
function commentDeleteRoute(req, res) {
  Chat
    .findById(req.params.id)
    .populate('user')
    .then(chat => {
      if (!chat) res.status(404).json({ message: 'Not found' })
      const comment = chat.comments.id(req.params.commentId)
      if (!comment) res.status(404).json({ message: 'Not found' })
      comment.remove()
      return chat.save()
    })
    .then(() => res.status(200).json({ message: 'Comment deleted' }))
    .catch(err => res.status(422).json(err))
}

// <<< CHAT LIKES >>>
// LIKE
function likeRoute(req, res) {
  Chat
    .findById(req.params.id)
    .populate('user')
    .then(chat => {
      if (!chat) res.status(404).json({ message: 'Not found' })
      return chat.likes.push( { user: {} } )
    })
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  commentCreate: commentCreateRoute,
  commentDelete: commentDeleteRoute,
  like: likeRoute
}
