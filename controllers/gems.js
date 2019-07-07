const Gem = require('../models/gem')

function indexRoute(req, res) {
  Gem
    .find()
    .populate('user')
    .then(gems => res.status(200).json(gems))
    .catch(err => res.status(404).json(err))
}

function showRoute(req, res) {
  Gem
    .findById(req.params.gemId)
    .populate('user')
    .populate('comments.user')
    .then(gem => {
      if (!gem) return (err => res.status(404).json(err))
      return res.status(200).json(gem)
    })
    .catch(err => res.status(404).json(err))
}

function createRoute(req, res) {
  req.body.user = req.currentUser
  Gem
    .create(req.body)
    .then(gem => res.status(201).json(gem))
    .catch(err => res.status(422).json(err))
}

function editRoute(req, res) {
  req.body.user = req.currentUser
  Gem
    .findById(req.params.gemId)
    .then(gem => {
      console.log('here')
      if (!gem) return res.status(404).json({ message: 'Not Found' })
      console.log(gem.user)
      console.log(req.currentUser)
      if (!gem.user.equals(req.currentUser._id)) return res.status(401).json({ message: 'Unauthorized' })
      Object.assign(gem, req.body)
      return gem.save()
    })
    .then(gem => res.status(200).json(gem))
    .catch(err => res.status(422).json(err))
}

function deleteRoute(req, res) {
  req.body.user = req.currentUser
  Gem
    .findByIdAndRemove(req.params.gemId)
    .then(gem => {
      if (!gem) return res.status(404).json({ message: 'Not Found' })
      if (!gem.user.equals(req.currentUser._id)) return res.status(401).json({ message: 'Unauthorized' })
    })
    .then(() => res.status(204).json({ message: 'Deleted successfully ' }))
    .catch(err => res.status(422).json(err))
}

function commentCreateRoute(req, res) {
  req.body.user = req.currentUser
  Gem
    .findById(req.params.gemId)
    .then(gem => {
      if (!gem) return res.status(404).json({ message: 'Not Found' })
      gem.comments.push(req.body)
      return gem.save()
    })
    .then(gem => res.status(201).json(gem))
    .catch(err => res.status(422).json(err))
}


function commentDeleteRoute(req, res) {
  req.body.user = req.currentUser
  Gem
    .findById(req.params.gemId)
    .then(gem => {
      if (!gem) return res.status(404).json({ message: 'Not Found' })
      const comment = gem.comments.id(req.params.commentId)
      if (!comment) return res.status(404).json({ message: 'Not Found' })
      if (!comment.user.equals(req.currentUser._id)) return res.status(401).json({ message: 'Unauthorized' })
      comment.remove()
      return gem.save()
    })
    .then(() => res.status(200).json({ message: 'Deleted successfully ' }))
    .catch(err => res.status(401).json(err))
}

function likeRoute(req, res) {
  req.body.user = req.currentUser
  Gem
    .findById(req.params.gemId)
    .populate('user')
    .then(gem => {
      if (!gem) return res.status(404).json({ message: 'Not Found' })
      gem.likes.push({ user: req.currentUser })
      return gem.save()
    })
    .then(gem => res.status(200).json(gem))
    .catch(err => res.status(422).json(err))
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute,
  edit: editRoute,
  delete: deleteRoute,
  commentCreate: commentCreateRoute,
  commentDelete: commentDeleteRoute,
  like: likeRoute
}
