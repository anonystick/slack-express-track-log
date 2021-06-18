const express = require('express')
const sendErrorSlack = require('send-error-slack')

const app = express()

// Route that triggers a error
app.get('/error', function (req, res, next) {
  const err = new Error('Internal Server Error')
  err.status = 500
  next(err)
})

// Send error reporting to Slack
app.use(sendErrorSlack({ webhookUri: 'https://hooks.slack.com/services/TOKEN'}))
app.listen(3000)
