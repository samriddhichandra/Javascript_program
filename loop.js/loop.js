// 1. WAP to print numbers from 5 to 15 by incrementing 1
console.log("Numbers from 5 to 15:");
for(let i = 5; i<=16;i++){
    console.log(i);
}

// 2. WAP to print numbers from 50 to 40, decrementing by 1
console.log("2. Numbers from 50 to 40:");
for(let i = 50;i>=40;i--)
{
    console.log(i);
}

// 3. WAP to find first 15 odd numbers
console.log("3. First 15 odd numbers:");
let count = 0;
for(let i =1; count<15; i++){
    if(i%2 !== 0){
        console.log(i);
        count++;
    }
}
// 4. WAP to find first 10 even numbers
console.log("4. First 10 even numbers:");
count = 0;
for(let i = 0; count < 10; i++){
    if(i % 2 === 0){
        console.log(i);
        count++;
    }
}

// 5. WAP to print table of 5 → 5, 10, 15, ..., 50
console.log("5. Table of 5:")
for(let  i = 1; i<= 10; i++){
    console.log(5 * i);
} 
// 6. Table of 10 → 10, 20, 30, ..., 100
console.log("6. Table of 10:");
for (let i = 1; i<=10; i++)
{
    console.log(10 * i);
}

// 7. Table of 10 in reverse → 100, 90, 80, ..., 10
console.log("7.Table of 10 in reverse");
for (let i = 10; i>=1; i--)
{
    console.log(10 * i);
}