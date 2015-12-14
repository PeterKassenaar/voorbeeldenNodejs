// 1. Maak de Express-app
var express = require('express');
var app = express();

// 2. Haal de gegevens binnen de app (in werkelijkheid doen we hier bv een database-call)
var auteurs = require('./auteurs.json');
var boeken = require('./boeken.json');

//*********************
// 3. Eigen middleware-functie
//*********************
app.use(function(req, res, next){
	console.log('Requested file: ', req.url);
	next();
});

//*********************
// 3a. Middleware-functie voor één route
//*********************
app.use('/index.html', function(req, res, next){
	console.log('Homepage opgevraagd: ', new Date());
	next();
});
// 4. Stel middleware in voor serveren van statische bestanden (HTML, CSS, images)
app.use(express.static(__dirname + '/public'));

// 5. Start de server.
app.listen(3000);
console.log('Express app gestart op localhost:3000');

//**************************
// 4. De Routes voor de API.
//**************************
app.get('/api', function(req, res){
	var msg ='<h1>Express API</h1>';
	msg += '<p>Gebruik \\api\\auteurs voor een lijst met auteurs.</p>';
	msg += '<p>Gebruik \\api\\boeken voor een lijst met boeken.</p>';
	res.send(msg);
});

// 4a. Retourneer auteurs
app.get('/api/auteurs', function(req, res){
	res.json(auteurs);
});

// 4b. Retourneer boeken
app.get('/api/boeken', function(req, res){
	res.json(boeken);
});

// 4c. Retourneer specifiek boek, op basis van ID
app.get('/api/boeken/:id', function(req, res){
	var id= req.params.id;
	var gezochtBoek;
	boeken.forEach(function(boek){
		if(boek.id === parseInt(id)){
			gezochtBoek = boek;
		}
	});
	// Boek niet gevonden
	if(!gezochtBoek){
		gezochtBoek={
			error : 'Boek niet gevonden'
		}
	}
	res.json(gezochtBoek);
});
