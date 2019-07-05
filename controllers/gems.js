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
    .findById(req.params.id)
    .populate('user')
    .populate('comments.user')
    .then(gem => {
      if (!gem) return (err => res.status(404).json(err))
      return res.status(200).json(gem)
    })
    .catch(err => res.status(404).json(err))
}

function createRoute(req, res) {
  Gem
    .create(req.body)
    .then(gem => res.status(201).json(gem))
    .catch(err => res.status(422).json(err))
}

function editRoute(req, res) {
  Gem
    .findById(req.params.id)
    .then(gem => {
      if (!gem) return res.status(404).json({ message: 'Not Found' })
      Object.assign(gem, req.body)
      return gem.save()
    })
    .then(gem => res.status(202).json(gem))
    .catch(err => res.status(422).json(err))
}

function deleteRoute(req, res) {
  Gem
    .findById(req.params.id)
    .then(gem => {
      if (!gem) return res.status(404).json({ message: 'Not Found' })
      return gem.remove()
    })
    .then(() => res.status(204).json({ message: 'Deleted successfully ' }))
    .catch(err => res.status(422).json(err))
}

function commentCreateRoute(req, res) {
  Gem
    .findById(req.params.id)
    .then(gem => {
      if (!gem) return res.status(404).json({ message: 'Not Found' })
      gem.comments.push(req.body)
      return gem.save()
    })
    .then(gem => res.status(201).json(gem))
    .catch(err => res.status(422).json(err))
}


function commentDeleteRoute(req, res) {
  Gem
    .findById(req.params.id)
    .then(gem => {
      if (!gem) return res.status(404).json({ message: 'Not Found' })
      const comment = gem.comments.id(req.params.commentId)
      if (!comment) return res.status(404).json({ message: 'Not Found' })
      comment.remove()
      return gem.save()
    })
    .then(() => res.status(204).json({ message: 'Deleted successfully ' }))
    .catch(err => res.status(401).json(err))
}

function likeRoute(req, res) {
  Gem
    .findById(req.params.id)
    .populate('user')
    .then(gem => {
      if (!gem) return res.status(404).json({ message: 'Not Found' })
      gem.likes.push({ user: {} })
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
