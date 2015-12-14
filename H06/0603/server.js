// server.js - applicatie voor het ophalen en
// opslaan van boeken in MongoDB
var express = require('express');
var bodyParser = require('body-parser');
var Boek = require('./models/boeken');

var app = express();

// 0. Middleware: JSON & form-data verwerken in body van request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

// 0. Middleware: statische website serveren
app.use(express.static(__dirname + '/public'));

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
		res.status(200).json(removed);
	})
});

// 5. Server sarten.
app.listen(3000, function () {
	console.log('server gestart op poort 3000');
});