 const tinderUser = new Object()
 const tinderUser = {}
 tinderUser.name = 'John Doe'
 tinderUser.id = "567jgh"
 tinderUser.isLoggedIn = false
 //console.log(tinderUser); 
 const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
        first: "John",
        last: "Doe"
    }
}
}
console.log(regularUser.fullname.userfullname.first); // John
const obj1 = { 1: "a", 2: "b"}
const obj2 = { 1: "c", 2: "d" } 
const obj3 = { ...obj1, ...obj2 }
console.log(obj3); // { 1: "c", 2: "d" }

