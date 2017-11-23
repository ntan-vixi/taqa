'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()

app.set('port', (process.env.PORT || 5000))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//ROUTES
app.get('/', function(req, res) {
	res.send("Chatbot running......")
})

//Twitter
app.get('/webhook/twitter', function(req, res) {
	res.send('get webhook')
})

app.listen(app.get('port'), function() {
	console.log("running: " + app.get('port'))
})