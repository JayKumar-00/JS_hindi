/*
In memory how data are stored and how it can be access based on that it is categorized in two categories (Officially, we can do based on our requirements)
1. Primitive (call by value) :- they always send their and the changes made are done in copy only
2. Non-Primitive
*/

//7 types :String, Number, Boolean, null(it means empty not zero not empty string), undefined, Symbol(Use to make some value to unique[bascially used in adv js when we use same variable so many times, so to make particular variable unique]), BigInt

/*
Reference (Non primitive) :- Array, Objects, Functions
*/

/*
 It is dynamic or static type language ??
 ANSWER :- JavaScript is a dynamic language, meaning that type checking is done at runtime, rather than compile time. This allows variables to hold different types of data at different times, without requiring explicit data type declarations.
                JavaScript is considered an interpreted language, although modern browsers utilize a technique called Just-In-Time (JIT) compilation to significantly improve its performance at runtime
                e.g.,  const score = 100
                        const score = true
                        const score = hundered
                        const scoreValue = 100.3
*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 53564136416341641365366165416n // DataType - (BigInt)

//Basic of definition of Array, it can also be declare within variable
const heros = ["shaktiman", "naagraj", "doga"]

//Basic of definition of Object, it can also be declare within variable
// we can access its element by myObj.name , myObj.age
let myObj = {
    name: "hitech",
    age: 22,
}

//Basic definition of Function, it can also be declare within variable
const myFunction = function(){
    console.log("Hello World");
}

// console.log(typeof bigNumber); //output - bigint
// console.log(typeof outsideTemp); //output - object
// console.log(typeof userEmail); //output - undefined
// console.log(typeof isLoggedIn); //output - boolean
// console.log(typeof score); //output - number
// console.log(typeof scoreValue); //output - number
// console.log(typeof myFunction); //output - function, but called obejct function
// console.log(typeof heros); //output - object
// console.log(typeof anotherId); //output - symbol

//https://262.ecma-international.org/5.1/#sec-11.4.3

//++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (primitive) - Here it always gives copy not original value, Heap (Non-Primitive) - And it gives reference to the value means, changes made in one can reflect to other also

let myYoutubeName = "JavaUser"
let anotherName = myYoutubeName
anotherName = "codeUser"
console.log(myYoutubeName) //DIFFERENT OUTPUT => JavaUser
console.log(anotherName) //DIFFERENT OUTPUT => codeUser

let userOne = {
    email: "user@gmiail.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "Java@gmail.com"

console.log(userOne.email) // SAME OUPUT => Java@gmail.com
console.log(userTwo.email) //SAME OUTPUT => Java@gmail.com