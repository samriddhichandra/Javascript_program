console.log("----  1 ----");

function first(){
    console.log("Hello from first function");
}
function name() {
    console.log("Hello Samriddhi");
    
}
first();
name();

console.log("----  2 ----");

function personalDetails(name, age, city) {
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("City: " + city);
}
personalDetails("Samriddhi", 20, "Pune");
console.log("----  3 ----");

function addThreeValues(a, b, c) {
    const result = a + b + c;
    console.log("Addition Result:", result);
}

// 3.2 Call with numeric values
addThreeValues(10.23, 600, 40);

// 3.3 Call with string values
addThreeValues("Hello", " Good", " Morning");