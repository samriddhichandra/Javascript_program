/*Write a function that takes two numbers as parameters and returns their difference.*/
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Function to calculate the difference between two numbers
function subtract(a, b) {
    return a - b;}

    function askForNumbers() {
        rl.question('Enter two numbers: ', (input) => {
            const numbers = input.split(' ').map(Number);
    
            if (numbers.length !== 2 || numbers.some(isNaN)) {
                console.log("Please enter exactly two valid numbers.");
                askForNumbers();  // Recursively ask the user again
            } else {
                const result = subtract(numbers[0], numbers[1]);
                console.log(`The difference is: ${result}`);
                rl.close();
            }
        });
    }
    
    askForNumbers();