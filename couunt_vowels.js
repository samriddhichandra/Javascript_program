//Goal: Count the vowels (both lowercase and uppercase): A, E, I, O, U, a, e, i, o, u
let str ="I am a good IT developer";
function countVowels(str){
    let count = 0;
    let vowels = "aeiouAEIOU";
    for (let i = 0; i< str.length; i++){
     if (vowels.includes(str[i])){
         count++;
       }
    }
    console.log("Number of vowels in the string: " + count);
}
countVowels(str);

//2. Write a function to get the sum of cubes from 1 to 5
 function sumOfCubes(n) {
    let sum = 0;
    for (let i =0; i <= n; i++) {
        sum += Math.pow(i, 3);
    }
    console.log("Sum of cubes from 1 to " + n + " is: " + sum);
}
sumOfCubes(5);

//Write a function oddPositionedChars
function oddPositionedChars(input)
{
    console.log("Characters at odd positions in the string:");
    console.log("Odd positioned characters (ignoring spaces):");
    for(let i = 0; i< input.length; i++) {
        if (i % 2 !== 0 && input[i] !== ' ') {
            console.log(input[i]);
        }
    }
}
let string1 = "Hard work always pays back";
let string2 = "Soon I will be UI IT Champ";

oddPositionedChars(string1);
oddPositionedChars(string2);

// Reverse string and ignore spaces 
function reverseString(str){
    let rev ="";
    for (let i = str.length - 1; i>= 0; i--){
        let char = str.charAt(i);
        if (char !== ' ') {
            rev += char;
        }

    }
console.log("Reversed string (no spaces):", rev);
}

// Input strings
let str1 = "Hard work always pays back";
let str2 = "Soon I will be Angular IT Champ";

// Call the function
reverseString(str1);
reverseString(str2);
