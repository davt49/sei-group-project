const User = require('../models/user')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')

// register handler
function register(req, res) {
  User
    .create(req.body)
    .then(user => res.status(201).json(user))
    .catch(err => console.log(err))
}

// login handler
function login(req, res) {
  User
    .findOne({ email: req.body.email })
    .then(user => {
      if (!user || !user.validatePassword(req.body.password)) return res.status(401).json({ message: 'Unauthorized' })
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '10d' })
      return res.status(200).json({ token: token })
    })
    .catch(err => console.log(err))
}

// Profile show handler
function show(req, res) {
  req.body.user = req.currentUser
  User
    .findOne({ email: req.body.user.email })
    .then(user => res.status(200).json(user))
    .catch(err => console.log(err))
}

module.exports = { register, login, show }
