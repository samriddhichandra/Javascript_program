// File Name → 06-voteEligibility.js

 function voteEligible(age){
  if (age === null || age <= 0 || age > 130) {
    console.log(`Age: ${age} → Invalid data`);
  } else if (age < 18) {
    console.log(`Age: ${age} → Not eligible for vote`);
  } else {
    console.log(`Age: ${age} → Eligible for vote`);
  }
};

// Test cases
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(null);
