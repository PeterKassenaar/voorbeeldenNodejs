// logger.js - Exporteer verschillende algemene logging-methoden
module.exports.log = function(msg){
	console.log('>> Log: ' + msg);
};
module.exports.info = function(msg){
	console.info('>> Info: ' + msg);
};
module.exports.error = function(msg){
	console.error('>> Error: ' + msg);
};