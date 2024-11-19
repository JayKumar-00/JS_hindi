"use strict"; // treat all JS code as newer version

// alert(3 + 3) //we are using nodejs not browser. Currently we cannot use in node it can use with html & css file or in browser

console.log(3 
    + 
    3) // code readability should be high

console.log("Hitesh")

//PREFER Mdn web docs for javacript code documentaion by Mozilla organization
//And original is ecma an organiztaion for javascript standardization not for code only organization/standardization
/*
Data types :-
- Global Object
- Numbers and Dates
*/

let name = "hitesh"
let age = 18
let isLoggedIn = false

//number => 2^53
//bigint : it is not in majorly use it is use in trading, stock, big websites - Red8, Facebook
//string : it can use in both single & double quotes, but prefer to use double quote ("")
//boolean => true/false
//null => standalone value (special data type)
//undefined => value is but not defined
//symbol => unique (mostly use to identify unique)

//object

// console.log(typeof "hitesh")
// console.log(typeof age)
console.log(typeof null) //OUTPUT - object
console.log(typeof undefined) //OUTPUT - undefined