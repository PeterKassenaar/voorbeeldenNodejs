// Uitwerking oefening 5.6, boek toevoegen via een formulier op de website
var router = require('express').Router();
var auteurs = require('../data/auteurs.json');
var boeken = require('../data/boeken.json');

// Een POST-request verwerken om nieuw boek toe te voegen
router.post('/api/addbook', function (req, res) {
	// verwerk binnenkomende request. We gaan er van uit
	// dat de parameters 'Titel', 'Auteur' en 'ISBN' aanwezig zijn.
	// TODO: error checking!
	console.log(req.body);
	var newBook = {};
	// dynamisch nieuwe ID uitrekenen en boek-object samenstellen.
	newBook.id = boeken.length + 1;
	newBook.titel = req.body.titel;
	newBook.auteur = req.body.auteur;
	newBook.ISBN = req.body.ISBN;
	boeken.push(newBook); // push naar de array

	// Echo de nieuwe boeken naar de client zodat ze verwerkt kunnen worden.
	// Noot: vanuit het oogpunt van performance zou het beter zijn alleen het nieuw
	// toegevoegde boek terug te pushen naar de browser en daar verder te verwerken.
	// Voor nu wordt de complete boeken-array teruggestuurd.
	res.json(boeken);

});

router.get('/api', function (req, res) {
	var msg = '<h1>Express API</h1>';
	msg += '<p>Gebruik \\api\\auteurs voor een lijst met auteurs.</p>';
	msg += '<p>Gebruik \\api\\boeken voor een lijst met boeken.</p>';
	res.send(msg);
});

// Retourneer auteurs
router.get('/api/auteurs', function (req, res) {
	res.json(auteurs);
});

// Retourneer boeken
router.get('/api/boeken', function (req, res) {
	res.json(boeken);
});

// Retourneer specifiek boek, op basis van ID
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

module.exports = router;