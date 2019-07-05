const router = require('express').Router()
const gems = require('../controllers/gems')
const chats = require('../controllers/chats')
const users = require('../controllers/users')

// gems route
router.route('/gems/:id/likes')
  .get(gems.like)

router.route('/gems/:id/comments/:commentId')
  .delete(gems.commentDelete)

router.route('/gems/:id/comments')
  .post(gems.commentCreate)

router.route('/gems/:id')
  .get(gems.show)
  .put(gems.edit)
  .delete(gems.delete)

router.route('/gems')
  .get(gems.index)
  .post(gems.create)


// chats routes
router.route('/chats/:id/likes')
  .get(chats.like)

router.route('/chats/:id/comments/:commentId')
  .delete(chats.commentDelete)

router.route('/chats/:id/comments')
  .post(chats.commentCreate)

router.route('/chats/:id')
  .get(chats.show)

router.route('/chats')
  .get(chats.index)


// user login and register router
router.route('/register')
  .post(users.register)

router.route('/login')
  .post(users.login)

// other route not found
router.route('/*')
  .all((req, res) => res.status(404).json({ message: 'Route Not Found' }))

module.exports = router
