// Eenvoudige webserver, uitgebreid met opties voor correcte MIME-type

// 0. initialisatie en variabelen
var http = require('http'),
	fs = require('fs'),
	path = require('path'),
	mime = require('mime'),
	root = __dirname + '/public/'; // magic variable

// 1. Maak de webserver
var server = http.createServer(function (req, res) {
	// 1a. Check of de root wordt opgevraagd.
	var fileName = '';
	var url = req.url;
	if (url === '/') {
		url = 'index.html'; // redirect als geen bestandsnaam is opgegeven
	}
	fileName = root + url;
	console.log('Gevraagd bestand: ', path.basename(fileName));

	// 1b. Check of bestand bestaat.
	fs.exists(fileName, function (exists) {
		if (exists) {
			serveFile(fileName); // ja.
		} else {
			fileName = root + '404.html'; // nee
			serve404(fileName);
		}
	});

	// 1c. Serveer gevraagde bestand.
	function serveFile(requestFile) {
		// 2. Maak een stream en server op basis van Events
		res.writeHead(200, {'Content-Type': mime.getType(requestFile)});
		var stream = fs.createReadStream(requestFile);
		stream.on('data', function (chunk) {
			res.write(chunk);
		});
		stream.on('end', function () {
			res.end();
		});
		stream.on('error', function (err) {
			console.log('error: ' + err);
		});
	}

	// 1d. Serveer 404, inclusief juiste http-header
	function serve404(requestFile) {
		res.writeHead(404, {'Content-Type': mime.getType(requestFile)});
		fs.readFile(requestFile, 'utf8', function (err, data) {
			if (err) {
				console.log('Error: ', err);
			} else {
				res.end(data);
			}
		})
	}
});

// 2. Start de server
server.listen(3000, function () {
	console.log('Server gestart op http://localhost:3000');
});
