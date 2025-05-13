function greaterNumber(a, b) {
    let result = a > b ? a : b;
    console.log(`${result} is greater`);
}

// Test cases
greaterNumber(10, -10);
greaterNumber(800, 899);

// 2. Check even or odd numbers
function isEvenOrOddNum(num) {
  return num % 2 === 0 ? true : false;
}

// Test cases for isEvenOrOddNum
console.log(`29 is even? -> ${isEvenOrOddNum(29)}`);
console.log(`44 is even? -> ${isEvenOrOddNum(44)}`);
console.log(`0 is even?  -> ${isEvenOrOddNum(0)}`);
console.log(`101 is even?-> ${isEvenOrOddNum(101)}`);

// 3. Check word length is even or odd
function wordLength(word) {
  return word.length % 2 === 0 ? "EVEN" : "ODD";
}

// Test cases for wordLength
console.log(`JavaScript length is ${wordLength("JavaScript")}`);
console.log(`developer length is ${wordLength("developer")}`);
console.log(`Google length is ${wordLength("Google")}`);