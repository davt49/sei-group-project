const port = process.env.PORT || 4000
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/han-solo'

module.exports = { port, dbURI }
