const fruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];

console.log("First Element:", fruits[0]); // First element
console.log("Last Element:", fruits[fruits.length - 1]); // Last element

fruits.unshift("Papaya"); // Adds "Papaya" to the beginning
console.log("After unshift:", fruits);

const mangoIndex = fruits.indexOf("Mango"); // FIXED: used fruits.indexOf
if (mangoIndex !== -1) {
    fruits.splice(mangoIndex, 1); // Removes "Mango"
}
console.log("After removing Mango:", fruits);

fruits.push("Pineapple"); // Adds "Pineapple" to the end
console.log("After adding Pineapple:", fruits);

const wmIndex = fruits.indexOf("Water Melon");
if (wmIndex !== -1) {
    fruits.splice(wmIndex, 0, "Dragon Fruit"); // INSERT before "Water Melon"
}
console.log("After inserting Dragon Fruit before Water Melon:", fruits);

const orIndex = fruits.indexOf("Orange");
if (orIndex !== -1) {
    fruits.splice(orIndex, 1, "Kiwi"); // Replace "Orange" with "Kiwi"
}
console.log("After replacing Orange with Kiwi:", fruits);
const slicedFruits = fruits.slice(1, 5); // from index 1 to 4 (5 excluded)
console.log("Elements from index 1 to 4:", slicedFruits);
const lastThree = fruits.slice(fruits.length - 3);
console.log("Last 3 elements:", lastThree);
