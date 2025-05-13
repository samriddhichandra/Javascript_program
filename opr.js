// Step 1: maleMarriageEligibility function using ternary operator
function maleMarriageEligibility(gender, age, boyName) {
    let result = (gender === "Male" && age >= 21) 
        ? `Hey ${boyName} age ${age} you are eligible for Marriage` 
        : `Hey ${boyName} age ${age} you are Not eligible for Marriage`;
    console.log(result);
}

// Function calls for Step 1
maleMarriageEligibility("Male", 25, "Shyam");   // Eligible
maleMarriageEligibility("Male", 17, "Rohan");   // Not eligible

function femaleMarriageEligibility(gender, age, girlName) {
    let result = (gender ==="Female" &&  age>=18)
    ? `Hey ${girlName} age ${age} you are eligible for Marriage`
    : `Hey ${girlName} age ${age} you are Not eligible for Marriage`;
    console.log(result);
}
// Function calls for Step 2
femaleMarriageEligibility("Female", 16, "Jenifer");       // Not eligible
femaleMarriageEligibility("Female", 27, "Madhuri"); // Eligible