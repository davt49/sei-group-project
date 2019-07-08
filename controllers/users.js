const User = require('../models/user')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')

// register handler
function register(req, res, next) {
  User
    .create(req.body)
    .then(user => res.status(201).json(user))
    .catch(next)
}

// login handler
function login(req, res, next) {
  User
    .findOne({ email: req.body.email })
    .then(user => {
      if (!user || !user.validatePassword(req.body.password)) return res.status(401).json({ message: 'Unauthorized' })
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '10d' })
      return res.status(200).json({ token: token })
    })
    .catch(next)
}

module.exports = {
  register,
  login
}
