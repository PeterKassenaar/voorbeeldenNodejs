// 02_helloworld_input.js
// Node.js code that reads a string from the command line and returns Hello <string>


// Import the readline module - this is a built-in Node.js module for reading input from the command line
const readline = require('readline');

// Create an interface for reading input and writing output, where:
// -  process.stdin = standard input (keyboard),
//  - process.stdout = standard output (screen)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// The question() function displays a prompt and waits for user input
// First parameter: the question text to display
// Second parameter: callback function that receives the user's answer
rl.question('Please enter your name: ', (answer) => {
    console.log('Hello ' + answer);
    rl.close();
});

// The above is another example of an asynchronous function.
// The callback function is called when the user's input is received.'
