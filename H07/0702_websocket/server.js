// voorbeeld websockets, op basis van NPM Module nodejs-websocket.
// Let op, deze server.js is GEEN webserver. Alleen web *sockets*.
// Open het bestand index.html op een andere server.
var ws = require('nodejs-websocket');
var server = ws.createServer(socketConnection).listen(3001);

function socketConnection(conn) {
	console.log('Nieuwe connection!');
	conn.on('text', function (msg) {
		console.log('Ontvangen: ', msg);
		server.connections.forEach(function (conn) {
			conn.sendText('Ontvangen: ' + msg + '! (' + new Date() + ')'); // echo tekst naar client in hoofdletters
		})
	});
	conn.on('close', function (code, reason) {
		console.log('Connection gesloten');
	})
}