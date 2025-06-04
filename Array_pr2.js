const array = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];

// 1. Total elements (length)
console.log("1. Total elements:", array.length);

// 2. First and last element
console.log("2. First element:", array[0]);
console.log("2. Last element:", array[array.length - 1]);

// 3. Third last element using length
console.log("3. Third last element:", array[array.length - 3]);

// 4. All even numbers using for loop
console.log("4. Even numbers:");
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        console.log(array[i]);
    }
}

// 5. All odd numbers using for loop
console.log("5. Odd numbers:");
for (let i = 0; i < array.length; i++)  {
    if (array[i] % 2 !== 0) {
        console.log(array[i]);
    }
}

// 6. Even positioned elements and their sum
let evenPosSum = 0;
console.log("6. Even positioned elements:");
for (let i = 0; i < array.length; i += 2) {
    console.log(array[i]);
    evenPosSum += array[i];
}
console.log("Sum of even positioned elements:", evenPosSum);

// 7. Odd positioned elements and their sum
let oddPosSum = 0;
console.log("7. Odd positioned elements:");
for (let i = 1; i < array.length; i += 2) {
    console.log(array[i]);
    oddPosSum += array[i];
}
console.log("Sum of odd positioned elements:", oddPosSum);

// 8. Sum of all elements
let totalSum = 0;
for (let i = 0; i < array.length; i++) {
    totalSum += array[i];
}
console.log("8. Total sum of all elements:", totalSum);

// 9. Numbers multiple of 5
console.log("9. Numbers multiple of 5:");
for (let i = 0; i < array.length; i++) {
    if (array[i] % 5 === 0) {
        console.log(array[i]);
    }
}

// 10. Is 115 present?
console.log("10. Is 115 present?:", array.includes(115));

// 11. Is 23 present?
console.log("11. Is 23 present?:", array.includes(23));

// 12. Insert 55, 66 at index 3
array.splice(3, 0, 55, 66);
console.log("12. After inserting 55 and 66 at index 3:", array);

// 13. Delete 3 elements from index 4
array.splice(4, 3); // deletes 3 elements from index 4
console.log("13. After deleting 3 elements from index 4:", array);
