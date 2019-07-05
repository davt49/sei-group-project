const router = require('express').Router()
const gems = require('../controllers/gems')
const users = require('../controllers/auth')
const secureRoute = require('../lib/secureRoute')


// gem route
router.route('/gems')
  .get(gems.index)
  .post(secureRoute, gems.create)

router.route('/gems/:id')
  .get(gems.show)
  .put(secureRoute, gems.edit)
  .delete(secureRoute, gems.delete)

router.route('/gems/:id/comments')
  .post(secureRoute, gems.commentCreate)

router.route('/gems/:id/comments/:commentId')
  .delete(secureRoute, gems.commentDelete)


// topic route
router.route('/topics')
  .get(topics.index)
  .post(secureRoute, topics.create)

router.route('/topics/:id')
  .get(topics.show)
  .put(secureRoute, topics.edit)
  .delete(secureRoute, topics.delete)

router.route('/topics/:id/comments')
  .post(secureRoute, topics.commentCreate)

router.route('/topics/:id/comments/:commentId')
  .delete(secureRoute, topics.commentDelete)

// phrases route

router.route('/phrases')
  .get(phrases.index)
  .post(secureRoute, phrases.create)

router.route('/phrases/:id')
  .get(phrases.show)
  .put(secureRoute, phrases.edit)
  .delete(secureRoute, phrases.delete)

router.route('/phrases/:id/comments')
  .post(secureRoute, phrases.commentCreate)

router.route('/phrases/:id/comments/:commentId')
  .delete(secureRoute, phrases.commentDelete)

// chats route
router.route('/chats')
  .get(chats.index)
  .post(secureRoute, chats.create)


// login and register router
router.route('/register')
  .post(users.register)

router.route('/login')
  .post(users.login)

// other route not found
router.route('/*')
  .all((req, res) => res.status(404).json({ message: 'Route Not Found' }))

module.exports = router
