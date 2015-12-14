// getTime.js - module een geformatteerde tijd (hh:mm:ss) teruggeeft.
module.exports = function () {
	var now = new Date();
	var tijd = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
	return tijd;
};