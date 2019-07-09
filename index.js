const express = require('express')
const { port, dbURI } = require('./config/environment')
const bodyParser = require('body-parser')
const router = require('./config/router')
const mongoose = require('mongoose')
const logger = require('./lib/logger')
const app = express()
const errorHandler = require('./lib/errorHandler')

mongoose.connect(dbURI, { useNewUrlParser: true }, () => console.log(dbURI))

app.use(bodyParser.json())

app.use(logger)

app.use('/api', router)

app.use(errorHandler)

app.listen(port, () => console.log(port))

module.exports = app
