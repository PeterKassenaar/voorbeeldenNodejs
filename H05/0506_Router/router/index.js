// .\routes\index.js - bestand met routes voor boeken, auteurs en login.
// Wordt ingesloten via server4.js.
var router = require('express').Router();
var auteurs = require('../data/auteurs.json');
var boeken = require('../data/boeken.json');

router.get('/api', function (req, res) {
	var msg = '<h1>Express API</h1>';
	msg += '<p>Gebruik \\api\\auteurs voor een lijst met auteurs.</p>';
	msg += '<p>Gebruik \\api\\boeken voor een lijst met boeken.</p>';
	res.send(msg);
});

// 6a. Retourneer auteurs
router.get('/api/auteurs', function (req, res) {
	res.json(auteurs);
});

// 6b. Retourneer boeken
router.get('/api/boeken', function (req, res) {
	res.json(boeken);
});

// 6c. Retourneer specifiek boek, op basis van ID
router.get('/api/boeken/:id', function (req, res) {
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
router.post('/user', function (req, res) {
	// verwerk binnenkomende request. We gaan er van uit
	// dat de parameter 'username' en 'email' aanwezig zijn.
	// TODO: error checking!
	console.log(req.body);
	user.username = req.body.username;
	user.email = req.body.email;

	// Echo het user-object naar de client
	res.json(user);
});

module.exports = router;