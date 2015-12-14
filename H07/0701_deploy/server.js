// 1. Modules laden en gegevens ophalen
var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./router');

// 2 .App instellen
var app = express();
app.set('port', process.env.PORT || 3000);

// 3. Middleware laden voor het parsen van JSON in het request
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
// 4. Stel middleware in voor serveren van statische bestanden (HTML, CSS, images)
app.use(express.static(__dirname + '/public'));

// 5. Gebruik de Routes in ingesloten bestand
app.use('/', routes);

// 6. Start de server.
app.listen(app.get('port'), function () {
	console.log('Express app gestart op poort', app.get('port'));
});
