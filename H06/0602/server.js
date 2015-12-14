// server.js - applicatie voor het ophalen en
// opslaan van boeken in MongoDB
var express = require('express');
var bodyParser = require('body-parser');
var Boek = require('./models/boeken');

var app = express();
app.use(bodyParser.urlencoded({
	extended: true
}));

// 1. Eenvoudige instructie
app.get('/api', function (req, res) {
	res.json({'Gebruik': 'voer een GET of POST-call uit naar /boeken'})
});

// 2. POST-endpoint: nieuw boek in de database plaatsen.
app.post('/api/boeken', function (req, res, next) {
	// 2a. nieuw boekobject maken.
	var boek = new Boek({
		titel : req.body.titel,
		auteur: req.body.auteur,
		ISBN  : req.body.isbn
	});
	// 2b. Opslaan in database.
	boek.save(function (err, boek) {
		// indien error: teruggeven
		if (err) {
			return next(err);
		}
		// indien OK: status 201 (Created) en boekobject teruggeven
		res.status(201).json(boek);
	})
});

//********************* NIEUW:

// 3. GET-endpoint: nieuw boek in de database plaatsen.
app.get('/api/boeken', function (req, res, next) {
	Boek.find(function (err, boeken) {
		if (err) {
			return next(err);
		}
		res.json(boeken);
	})
});

// 4. DELETE-endpoint: boek verwijderen uit de database.
app.delete('/api/boeken/:id', function (req, res, next) {
	Boek.remove({_id: req.params.id}, function (err, removed) {
		if (err) {
			return next(err);
		}
		console.log('removed: ', removed);
		res.status(200).json(removed);
	})
});

app.listen(3000, function () {
	console.log('server gestart op poort 3000');
});