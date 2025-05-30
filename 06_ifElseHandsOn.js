const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to check if a number is even or odd
function check_even_odd(num) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

// Ask the user for input
rl.question("Enter a number: ", function(input) {
  const number = parseInt(input);

  if (isNaN(number)) {
    console.log("Please enter a valid number.");
  } else {
    console.log(`${number} is ${check_even_odd(number)}`);
  }

  rl.close(); // Important: Close the input stream
});
