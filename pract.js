/*let score = "33"
console.log(typeof score); 
let valueInnumber = parseInt (score);
console.log(typeof valueInnumber);
let value = 4
let negVal =-value;
console.log(negVal);
 
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2%2)
console.log(2**2)*/

//Reverse a string 
/*let str ="Hello"
let rev ="";
for(let i = str.length - 1; i >= 0; i--){
    rev += str[i];
}
console.log(rev);*/
/* Check Palindrome
let str1 = "madam";
let rev1 ="";
for (let i = str1.length - 1; i >= 0; i--){
    rev1 += str1[i];}
    if (rev1 === str1) {
        console.log("Palindrome");
    }
    else{
        console.log("Not a Palindrome");
    }*/

        // Find the largest number in an array.
        let arr = [1, 2, 3, 432, 5];
        let largest = Math.max(...arr)
        console.log(largest);

//Calculate the sum of the first N natural numbers.
let n = 10;
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log("Sum of first " + n + " natural numbers is: " + sum);

//Check if a number is prime.
let num = 29;
let isPrime = true;
if (num < 2) {
    isPrime = false}
else{
for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}
}
if (isPrime) {
    console.log(num + " is a prime number.");
} else {
    console.log(num + " is not a prime number.");
}