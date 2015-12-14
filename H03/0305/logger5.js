// Require de module 'moment'. Let op ontbreken van de pad-informatie.
// Node.js kijkt dan standaard in \node_modules
var moment = require('moment'),
	colors = require('colors');
module.exports = function () {
	moment.locale('nl');	// Stel Nederlandse notatie in
	this.log = function (msg) {
		var prefixString = moment().format('lll') + ', Log >> ';
		console.log(prefixString.green + msg);
	};

	this.info = function (msg) {
		var prefixString = moment().format('lll') + ', Info >> ';
		console.info(prefixString.blue + msg);
	};

	this.error = function (msg) {
		var prefixString = moment().format('lll') + ', Error >> ';
		console.error(prefixString.bold.red + msg);
	};

	return this;
};