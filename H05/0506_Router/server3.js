// Express en externe routes laden
var express = require('express');
var routesV1 = require('./routesApiV1');
var routesV2 = require('./routesApiV2');
var app = express();

// Er worden twee paden gedefinieerd voor routes naar de juiste versie
// van de API.
app.use('/api/v1', routesV1);
app.use('/api/v2', routesV2);
app.listen(3000, function () {
	console.log('Express-server gestart op http://localhost:3000');
});