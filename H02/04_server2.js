// De opgevraagde URL in de website tonen.
var http = require('http');
var server = http.createServer(function (request, response) {
	var url = request.url;
	response.writeHead(200, {'Content-Type':'text/html'});
	response.write('<h1>De gevraagde URL: ' + url + '</h1>');
	response.end();
});
server.listen(3000); // server starten
console.log('Server gestart op http://localhost:3000 ...');