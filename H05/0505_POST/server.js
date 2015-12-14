// Express laden
var express = require('express');
var app = express();

// Middleware laden voor het parsen van JSON in het request
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
	extended: true
}));

// Beknopte instructie voor gebruik
app.get('/', function(req, res){
	res.send('Stuur een POST-request met "username" en "email" naar http://localhost:3000')
});

// Een POST-request verwerken
var user = {};
app.post('/', function (req, res) {
	// verwerk binnenkomende request. We gaan er van uit
	// dat de parameter 'username' en 'email' aanwezig zijn.
	// TODO: error checking!
	console.log(req.body);
	user.username = req.body.username;
	user.email = req.body.email;

	// Echo het user-object naar de client
	res.json(user);
});

app.listen(3000);
console.log('Express-server gestart op http://localhost:3000');