// Verschillende methodes om te werken met het file system
var fs = require('fs');
var msg = 'Hello World';

// #1. Bbestand opslaan
fs.writeFile('hello.txt', msg, function () {
	console.log('bestand opgeslagen!')
});

// #2. Bestand inlezen en in de console tonen
fs.readFile('hello.txt', 'utf8', function (err, data) {
	if (err) {
		console.log('Error: ', err);
	} else {
		console.log('bestand ingelezen: ', data);
	}
});

// #3. Bestand verwijderen via unlink
fs.unlink('text.txt', function (err) {
	if (err) {
		console.log('Error: ', err);
	} else {
		console.log('Text.txt is verwijderd');
	}
});

// #4. Eerst testen of bestand bestaat, voordat unlink wordt aangeroepen:
fs.exists('test.txt', function (exists) {
	if (exists) {
		deleteFile('test.txt');
	} else {
		console.log('text.txt niet gevonden! Kan niet verwijderen.')
	}
});

function deleteFile(fileName) {
	fs.unlink(fileName, function (err) {
		if (err) {
			console.log('Error: ', err);
		} else {
			console.log(fileName, ' is verwijderd');
		}
	});
}

