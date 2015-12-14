// Express en externe routes laden
var express = require('express');
var routes = require('./routes');
var app = express();

app.use('/', routes);
app.listen(3000, function () {
	console.log('Express-server gestart op http://localhost:3000');
});