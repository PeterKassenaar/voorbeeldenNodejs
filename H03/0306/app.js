// app.js - geen wijzigingen.
var logger = require('./logger');
var myLog = logger();
myLog.log('Algemene logging-regels worden nu groen weergegeven');
myLog.info('Informatieve meldingen zijn blauw');
myLog.error('Foutmeldingen zijn rood en vet');
