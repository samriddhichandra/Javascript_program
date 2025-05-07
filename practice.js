// Required for reading input from the console in Node.js
const readline = require('readline');
// Create an interface to read input from stdin
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to add two numbers
function addNumber(num1, num2) {
  var sum = num1 + num2;
  return sum;
}

// Asking the user for input
rl.question('Enter the first number: ', (answer1) => {
  rl.question('Enter the second number: ', (answer2) =>{
    // Convert inputs to numbers
    let num1 = parseFloat(answer1);
    let num2 = parseFloat(answer2);

    // Call the function and display the result
    let result = addNumber(num1, num2);
    console.log("Sum:", result);

    // Close the readline interface
    rl.close();
  });
});
