//Dates :- It is an object type

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString()) // myDate.toISOString() & myDate.toJSON() both porduce the same output but still use for differnet purpose JSON is used for serializing a Date object into JSON format. By default it internally call the toISOString() method for Date object
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleDateString())

// console.log(typeof myDate) //OUTPUT - object

// let myCreatedDate = new Date(2023, 0, 23) //Here month start from 0
// let myCreatedDate = new Date(2023, 10, 23) // IT is for Nov
// let myCreatedDate = new Date(2023, 10, 23, 5,3)
// let myCreatedDate = new Date("2023-01-14") //But here it start form 1 of formate YY-MM-DD
let myCreatedDate = new Date("01-14-2023") //Both have same output

// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(myDate);
console.log(myDate.getMonth() + 1);
console.log(myDate.getDay());

// `${myDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday: "long", //It gives the full name of day such as Thuresday
})