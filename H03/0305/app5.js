// app5.js - geen wijzigingen. In de logger wordt nu ook 'colors' gebruikt
var logger = require('./logger5');
var myLog = logger();
myLog.log('Algemene logging-regels worden nu groen weergegeven');
myLog.info('Informatieve meldingen zijn blauw');
myLog.error('Foutmeldingen zijn rood en vet');
