'use strict'

const config = require('./config.js');

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()

app.set('port', (process.env.PORT || 5000))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//ROUTES
app.get('/', function(req, res) {
	res.send("Chatbot running..")
})

//Twitter
/*app.get('/webhook/twitter', function(req, res) {
	res.send('get webhook')
})*/
app.get('/webhook/twitter', function(req, res) {
	var crypto = require('crypto');
	var hmac = crypto.createHmac('sha256', config.consumer_secret);
	var reqQuery = req.query;
	if (!reqQuery) {
		hmac.update(reqQuery.crc_token);
		var sha256_hash_digest = hmac.digest('base64');
		res.status(200).send({ "response_token": "sha256=" + sha256_hash_digest });
	}
});

app.listen(app.get('port'), function() {
	console.log("running: " + app.get('port'))
})