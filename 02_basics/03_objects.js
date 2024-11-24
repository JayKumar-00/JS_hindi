// objects can be declared in two ways and they are     1. literals     2. constructor

// singleton - when we create through constructor then singleton is created means it is only one of its type. And if we created someother way then it create its multiple instances

//Another method to create object is by calling its constructor - Object.create

//object literals

const mySym = Symbol('key1')

const JsUser = {
    name: "hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "myKey1", //It is not the right way to use the symbol (mySym: "myKey1"), instead we have to use something like, [mySym]
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLooogedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


// console.log(JsUser.email); //It is not recommended to use 
// console.log(JsUser["email"])
// console.log(JsUser.full name); //It is not possible it throws an error
// console.log(JsUser["full name"]);

// console.log(typeof JsUser.mySym); // OUTPUT - string
// console.log(JsUser.mySym); //It should declare like JsUSer[mySym]

// console.log(JsUser[mySym]);

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@ms.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
