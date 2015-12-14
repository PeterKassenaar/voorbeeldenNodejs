//app.js - Array met personen maken en tonen in de console
var Persoon = require('./Persoon');
var colors = require('colors');
var arrayPersonen = [];

// array vullen met personen
arrayPersonen.push(new Persoon('Peter', 'Kassenaar', 'info@kassenaar.com'));
arrayPersonen.push(new Persoon('Bob', 'van Duuren', 'info@vanduurenmedia.nl'));
arrayPersonen.push(new Persoon('Michiel', 'de Rond', 'mderond@vanduurenmedia.nl'));

// persoonsarray naar de console schrijven
arrayPersonen.forEach(function (persoon) {
	console.log('Naam: ', persoon.voornaam, persoon.achternaam);
	console.log(persoon.email.blue.underline);
	// OF: console.log(colors.blue.underline(persoon.email));
	console.log('/*-------------------*/')
});
