
const cors = require('cors')
const express = require('express')

require('./_helpers/create-test-users')()

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// allows cors requests from any origin and with credential:
app.use(cors({ origin: (origin, callback) => callback(null, true), credeitals: false}))

// Swagger API Document
app.use('/api-doc', require('./_helpers/swagger'))

// user routes
app.use('/users', require('./users/user.route'))

// global error handler
app.use(require('./_middleware/error-handler'))

module.exports = app;



