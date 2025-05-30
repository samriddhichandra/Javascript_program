// File Name → 06_ifElseHandsOn.js

// 1. Check if a number is EVEN or ODD
const checkEvenOrOdd = function (num) {
  if (num % 2 === 0) {
    console.log(`${num} is EVEN`);
  } else {
    console.log(`${num} is ODD`);
  }
};

// Test cases
checkEvenOrOdd(45);
checkEvenOrOdd(70);
checkEvenOrOdd(67);
checkEvenOrOdd(98);

// 2. Check if person is eligible to vote (age >= 18)
const checkVotingEligibility = function (age) {
  if (age >= 18) {
    console.log(`Age ${age}: Eligible to vote`);
  } else {
    console.log(`Age ${age}: Not eligible to vote`);
  }
};

// Test cases
checkVotingEligibility(18);
checkVotingEligibility(20);
checkVotingEligibility(17);
checkVotingEligibility(40);

// 3. Check if string contains more than 10 characters
const checkStringLength = function (str) {
  if (str.length > 10) {
    console.log(`"${str}" contains more than 10 characters`);
  } else {
    console.log(`"${str}" does NOT contain more than 10 characters`);
  }
};

// Test case
checkStringLength("JavaScript - ES6");

// 4. Check if string starts with "Java"
const checkStartsWithJava = function (str) {
  if (str.startsWith("Java")) {
    console.log(`"${str}" starts with "Java"`);
  } else {
    console.log(`"${str}" does NOT start with "Java"`);
  }
};

// Test cases
checkStartsWithJava("JavaScript Language");
checkStartsWithJava("Programming Language");
