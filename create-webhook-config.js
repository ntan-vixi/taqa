var request = require('request')


// twitter authentication
var twitter_oauth = {
  consumer_key: 'Z9qJE6Dn63hyD9LYzVL1J5YGg',
  consumer_secret: 'c2EGeWqdu8wRGFVcxZaBl8M0RMgugmQlCY33pi3af9BDQ2CAbE',
  token: '932624800270438401-YOmV6sBr8CCv1S2uuVJd3P04LW5utFs',
  token_secret: 'tc6TWQFOTXCIqCbCxbyFR4QCEGKHYtD2Rb9c8TXUxKjK5'
}

var WEBHOOK_URL = 'https://taqabots.herokuapp.com/webhook/twitter'


// request options
var request_options = {
  url: 'https://api.twitter.com/1.1/account_activity/webhooks.json',
  oauth: twitter_oauth,
  headers: {
    'Content-type': 'application/x-www-form-urlencoded'
  },
  form: {
    url: WEBHOOK_URL
  }
}

// POST request to create webhook config
request.post(request_options, function (error, response, body) {
  console.log(body)
})