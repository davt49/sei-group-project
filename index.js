const express = require('express')
const { port, dbURI } = require('./config/environment')
const app = express()

const mongoose = require('mongoose')
mongoose.connect(dbURI, { useNewUrlParser: true }, () => console.log(dbURI))

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const router = require('./config/router')
app.use('/api', router)

app.listen(port, () => console.log(port))
