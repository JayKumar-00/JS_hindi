const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username},  welcome to website`); //Here this is used to refer to current context
        console.log(this);
        /*
        OUTPUT - 
            hitesh,  welcome to website
            {
                username: 'hitesh',
                price: 999,
                welcomeMessage: [Function: welcomeMessage]
            }
            sam,  welcome to website
            {
                username: 'sam',
                price: 999,
                welcomeMessage: [Function: welcomeMessage]
            }
        */
        
    }
}

// user.welcomeMessage() //OUTPUT - hitesh,  welcome to website
// user.username = "sam"
// user.welcomeMessage() //OUTPUT - sam,  welcome to website, because here is change the current context


// console.log(this); //OUTPUT - {}, an empty object, because here we are node environment, but in browser it gives Windows{}. So in browser the global object is Window object (e.g., click, eventListener, form submit). Here print this outside the function that's why it gives an empty object

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); //OUTPUT - undefined, because it work only in object, but not as inside the function
    
    // console.log(this); //when we print this inside the function then we get
    /*
        OUTPUT - 
            <ref *1> Object [global] {
            global: [Circular *1],
            clearImmediate: [Function: clearImmediate],
            setImmediate: [Function: setImmediate] {
                [Symbol(nodejs.util.promisify.custom)]: [Getter]
            },
            clearInterval: [Function: clearInterval],
            clearTimeout: [Function: clearTimeout],
            setInterval: [Function: setInterval],
            setTimeout: [Function: setTimeout] {
                [Symbol(nodejs.util.promisify.custom)]: [Getter]
            },
            queueMicrotask: [Function: queueMicrotask],
            structuredClone: [Function: structuredClone],
            atob: [Getter/Setter],
            btoa: [Getter/Setter],
            performance: [Getter/Setter],
            fetch: [Function: fetch],
            crypto: [Getter]
            }
    */
    
// }
// chai()

// const chai = function(){
//     let username = "hitesh"
    // console.log(this);
    /*
        OUTPUT - 
            <ref *1> Object [global] {
            global: [Circular *1],
            clearImmediate: [Function: clearImmediate],
            setImmediate: [Function: setImmediate] {
                [Symbol(nodejs.util.promisify.custom)]: [Getter]
            },
            clearInterval: [Function: clearInterval],
            clearTimeout: [Function: clearTimeout],
            setInterval: [Function: setInterval],
            setTimeout: [Function: setTimeout] {
                [Symbol(nodejs.util.promisify.custom)]: [Getter]
            },
            queueMicrotask: [Function: queueMicrotask],
            structuredClone: [Function: structuredClone],
            atob: [Getter/Setter],
            btoa: [Getter/Setter],
            performance: [Getter/Setter],
            fetch: [Function: fetch],
            crypto: [Getter]
            }
    */
    
    // console.log(this.username); //OUTPUT - undefined
// }

// chai() //OUTPUT - undefined , it will also give the same output

//arrow function
// const chai = () => {
//     let username = "hitesh"
//     // console.log(this.username); //OUTPUT - undefined
//     console.log(this); //OUTPUT - {}
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4)); //OUTPUT - 7

//implicit return - it assume/accept that their is no need to write return keyword to get the output if it is only in single line
// const addTwo = (num1, num2) => num1 + num2

// console.log(addTwo(3, 4)); //OUTPUT - 7

//Herewe don't have to return keyword because we are using parenthesis it doesn't require return keyword to give the result
// const addTwo = (num1, num2) => (num1 + num2)

// console.log(addTwo(3, 4)); //OUTPUT - 7

//The benefit of using parenthesis is that we can declare object {} inside the parenthesis, because if we use only curly braces then we will get OUTPT - undefined
// const addTwo = (num1, num2) => {username: "hitesh"}) //OUTPUT - undefined
const addTwo = (num1, num2) => ({username: "hitesh"}) //OUTPUT - { username: 'hitesh' }

console.log(addTwo(3, 4)); //OUTPUT - 7