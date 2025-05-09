/*Write a program that checks whether a number is positive, negative, or zero.
 Use an if statement to print "Positive", "Negative", or "Zero"*/
const Readline = require('readline');
const readline = Readline.createInterface({
    input: process.stdin, 
    output: process.stdout
    });
readline.question('Enter Number: ', (number) => {
    if (number > 0) {
        console.log("Positive");
    } else if (number < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
    readline.close();
});