// Persoon.js - module om persoons-objecten te instantieren.
var Persoon = function(voornaam, achternaam, email){
	this.voornaam = voornaam;
	this.achternaam = achternaam;
	this.email = email;
};
module.exports = Persoon;