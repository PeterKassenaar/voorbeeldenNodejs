// Een JSON-webserver.
var http = require('http');
var server = http.createServer(function (request, response) {

	// Header instellen op JSON
	response.writeHead(200, {'Content-Type' : 'application/json'});

	// Een JSON-string teruggeven (let op: het *moet* een string zijn)
	response.write('{"voornaam"   : "Peter","achternaam" : "Kassenaar",	"email": "info@kassenaar.com"}');

	response.end();
});
server.listen(3000); // server starten
console.log('Server gestart op http://localhost:3000 ...');