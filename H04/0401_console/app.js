// verschillende voorbeelden van console-meldingen
console.log('Algemene logging-melding');
console.info('Algemene informatie-melding');
console.error('Algemene foutmelding');
console.warn('Algemene waarschuwing');
console.time('Tijdsduur van for-loop');
var j = 0;
for (var i = 0; i < 10000000; i += 1) {
    j += i;
}
console.log('j: ', j);
console.timeEnd('Tijdsduur van for-loop');

