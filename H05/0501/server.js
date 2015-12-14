var express = require('express');
var app = express();

// 1. Routes voor deze app - ten eerste de Homepage
app.get('/', function (req, res) {
	res.send('Hello World - dit is Express!');
});

// 2. JSON retour zenden
var persoon = {
	voornaam  : 'Peter',
	achternaam: 'Kassenaar'
};
app.get('/json', function (req, res) {
	res.send(persoon);
});

app.listen(3000);
console.log('Express-server gestart op http://localhost:3000');