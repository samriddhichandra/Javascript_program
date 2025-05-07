const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function addNumber(num1,num2)
{
    var sum = num1 + num2;
    return sum;
}
rl.question('Enter the first number:',(answer1) => {
    rl.question('Enter the second number:',(answer2) => {
        let num1 = parseFloat(answer1);
        let num2 = parseFloat(answer2);
        let result = addNumber(num1,num2);
        console.log("Sum:",result);
        rl.close();
    });
});
