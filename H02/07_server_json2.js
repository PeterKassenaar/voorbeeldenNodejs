// Een JSON-webserver.
var http = require('http');
// 1. variabelen in dit script
var persoon = {
	voornaam   : 'Peter',
	achternaam : 'Kassenaar',
	email      : 'info@kassenaar.com'
};
var contact = {
	adres          : 'Dorpsstraat 24',
	postcode       : '1000 AA',
	plaats         : 'Amsterdam',
	openingstijden : 'dagelijks van 9:00-17:00 uur'
};
var obj404 = {
	status : '404',
	text   : 'Niet gevonden...'
};
// 2. server maken
var server = http.createServer(function (request, response) {
	if (request.url === '/persoon' || request.url === '/') {
		// 2a. Stel in welke URL's ('routing') wordt geaccepteerd
		response.writeHead(200, {'Content-Type' : 'application/json'});
		response.write(JSON.stringify(persoon));
	} else if (request.url === '/contact') {
		response.writeHead(200, {'Content-Type' : 'application/json'});
		response.write(JSON.stringify(contact));
	} else {
		response.writeHead(404, {'Content-Type' : 'application/json'});
		response.write(JSON.stringify(obj404));
	}
	response.end();
});
server.listen(3000); // server starten
console.log('Server gestart op http://localhost:3000 ...');