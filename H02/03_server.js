// Hello World als webserver.
var http = require('http');
var server = http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type':'text/plain'});
	response.write('Hello World');
	response.end();
});
server.listen(3000); // server starten
console.log('Server gestart op http://localhost:3000 ...');