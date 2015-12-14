// Maak module helloworld.js en exporteer deze
var myFunc = function(input){
	return input + ' world'
};
module.exports.HelloWorld = myFunc;


// in andere file:
var importHello = require('./HelloWorld');
console.log(importHello.HelloWorld('Hello'));
// prints: hello world