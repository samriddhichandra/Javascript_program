/*Create an array of numbers from 1 to 5, and then 
write a program that sums all the numbers in the array using a loop.*/

const numbers = [1, 2, 3, 4, 5]; // Create an array of numbers from 1 to 5
let sum =0;
for (let i = 0; i < numbers.length; i++) { // Loop through the array
    sum = sum + numbers[i]; // Add each number to the sum
}
console.log(`The sum of the numbers in the array is: ${sum}`); // Output the result
