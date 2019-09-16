// index.js - Simple illustration on how to create a module that uses
// moment.js as a dependency

// 0. import dependencies
const moment = require('moment');
module.exports = function myMoment(locale, msg) {
    // 1. Check if locale is a string (write other checks -if necessary- yourself)
    if (typeof locale !== 'string') {
        throw  new TypeError('myMoments needs a string! (like "nl" or "de")');
    }
    // 2. Set up moment
    moment.locale(locale);

    // 3. Return a string, depending if msg is passed in or not
    return msg
        ? `${moment().format('lll')}, >> ${msg}`
        : moment().format('lll');
};
