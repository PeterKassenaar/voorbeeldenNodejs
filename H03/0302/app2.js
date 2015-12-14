// app2.js - logger.js exporteert nu een class met verschillende methods.
var logger = require('./logger2');
var myLog = logger(); // functie invoking
myLog.info('Dit is informatie');
myLog.error('Dit is een foutmelding');
console.log('Algemene logger');
