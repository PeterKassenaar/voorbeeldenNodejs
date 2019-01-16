console.log('Hello World'); // hello world
console.log('2 + 2 = ', 2 + 2); // 4

var person = {
	fName: 'Peter',
	lName: 'Kassenaar'
};
// ES5 notatie, traditioneel
// console.log('person: ' +  person.fName + ' ' + person.lName); // Peter Kassenaar

// ES6 notatie, met string literals:
console.log(`person:  ${person.fName} ${person.lName}`); // Peter Kassenaar

