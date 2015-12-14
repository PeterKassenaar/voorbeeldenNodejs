// Voorbeeld van het gebruik van timers.

// #1 - met inline anonieme functie
setTimeout(function () {
    console.log('Er zijn drie seconden verstreken!')
}, 3000);


// #2 - met benoemde functie
setTimeout(showMsg, 2000);
function showMsg() {
    console.log(' Nu zijn er twee seconden verstreken')
}

// #3 - interval - doorlopende functie van 0-5 seconden
var aantal = 0;
var interval = setInterval(function () {
    aantal += 1;
    console.log(aantal, 'seconden verstreken.');
    if (aantal === 5) {
        console.log('Exit na vijf seconden.');
        clearInterval(interval);
    }
}, 1000);