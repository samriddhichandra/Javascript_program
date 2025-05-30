function check(age)
{
    if (age >= 18){
        console.log("Eligible to vote");
    }
    else{
        console.log("Not eligible to vote");
    }
}
// Test cases
check(20); // Eligible to vote
check(16); // Not eligible to vote
check(18); // Eligible to vote