//db.js - logica voor verbinden met MongoDB
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/boeken', function () {
	console.log('mongoose connected');
});
module.exports = db;
