// Require de module 'moment'. Let op ontbreken van de pad-informatie.
// Node.js kijkt dan standaard in \node_modules
var moment = require('moment');
module.exports = function () {
	moment.locale('nl');	// Stel Nederlandse notatie in
	this.log = function (msg) {
		console.log(moment().format('lll') + ', Log >> ' + msg);
	};

	this.info = function (msg) {
		console.info(moment().format('lll') + ', Info >> ' + msg);
	};

	this.error = function (msg) {
		console.error(moment().format('lll') + ', Error >> ' + msg);
	};

	return this;
};