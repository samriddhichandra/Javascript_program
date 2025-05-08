const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function reverseString(str) {
    return str.split('').reverse().join('');
}

rl.question("Enter a string: ", function(input) {
    const reversed = reverseString(input);
    console.log("Reversed string:", reversed);
    rl.close(); // Important to close the interface!
});
 