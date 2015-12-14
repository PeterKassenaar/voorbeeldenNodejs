// 1. Modules laden en gegevens ophalen
var express = require('express');
var bodyParser = require('body-parser');
var auteurs = require('./auteurs.json');
var boeken = require('./boeken.json');

// 2 .App instellen
var app = express();

// 3. Middleware laden voor het parsen van JSON in het request
app.use(bodyParser.urlencoded({
	extended: true
}));


// 4. Stel middleware in voor serveren van statische bestanden (HTML, CSS, images)
app.use(express.static(__dirname + '/public'));

// 5. Start de server.
app.listen(3000);
console.log('Express app gestart op localhost:3000');

//**************************
// 6. De Routes voor de API.
//**************************
app.get('/api', function (req, res) {
	var msg = '<h1>Express API</h1>';
	msg += '<p>Gebruik \\api\\auteurs voor een lijst met auteurs.</p>';
	msg += '<p>Gebruik \\api\\boeken voor een lijst met boeken.</p>';
	res.send(msg);
});

// 6a. Retourneer auteurs
app.get('/api/auteurs', function (req, res) {
	res.json(auteurs);
});

// 6b. Retourneer boeken
app.get('/api/boeken', function (req, res) {
	res.json(boeken);
});

// 6c. Retourneer specifiek boek, op basis van ID
app.get('/api/boeken/:id', function (req, res) {
	var id = req.params.id;
	var gezochtBoek;
	boeken.forEach(function (boek) {
		if (boek.id === parseInt(id)) {
			gezochtBoek = boek;
		}
	});
	// Boek niet gevonden
	if (!gezochtBoek) {
		gezochtBoek = {
			error: 'Boek niet gevonden'
		}
	}
	res.json(gezochtBoek);
});

// 7. Een POST-request verwerken
var user = {};
app.post('/user', function (req, res) {
	// verwerk binnenkomende request. We gaan er van uit
	// dat de parameter 'username' en 'email' aanwezig zijn.
	// TODO: error checking!
	console.log(req.body);
	user.username = req.body.username;
	user.email = req.body.email;

	// Echo het user-object naar de client
	res.json(user);
});