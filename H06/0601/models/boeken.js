// boeken.js : Model voor boeken in MongoDB-database
var db = require('../db');
var Boek = db.model('Boek', {
	titel : {type: String, required: true},
	auteur: {type: String, required: true},
	ISBN  : {type: String, required: true},
	date  : {type: Date, required: true, default: Date.now}
});
module.exports = Boek;