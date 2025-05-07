/*Create a for loop that prints numbers from 1 to n*/

const Readline = require ('readline');
const rl = Readline.createInterface ({
    input : process.stdin,
    output : process.stdout
});
function printNumbers(n) {
    for (let i =1; i<=n;i++){
        console.log(i);
    }
    }
    rl.question ('Enter a number: ', (n) => {
        const number = parseInt(n);
        printNumbers(number);
        console.log ('Numbers from 1 to ' + number + ' are:');
        printNumbers (number);
        rl.close ();
    }
);