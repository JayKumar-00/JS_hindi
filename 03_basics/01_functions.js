function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

//This part is refernce sayMyName and () is its execution
// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(3, 4) //OUTPUT - 7
// addTwoNumbers(3, "4") //OUTPUT - 34
// addTwoNumbers("3", 4) //OUTPUT - 34
// addTwoNumbers(3, "a") //OUTPUT - 3a
// addTwoNumbers(3, null) //OUTPUT - 3
// const result = addTwoNumbers(3, 4)

// console.log("Result: ", result) //OUTPUT - Result: undefined

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 4)

// console.log("Result: ", result); //OUTPUT - Result: 7

function loginUserMessage(username = "sam"){ //Here we declare the username so that if user didn't enter the name then by default it gives sam OR if we user enter the name then it gives user's input
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("User_Js")); //OUTPUT - User_Js just logged in
// console.log(loginUserMessage("")); //OUTPUT -  just logged in
// console.log(loginUserMessage()); //OUTPUT - Please enter a username undefined \n just logged in
// console.log(loginUserMessage("hitesh")); //OUTPUT - Please enter a username undefined \n just logged in

function calculateCartPrice(val1,val2, ...num1){ // Here it is called rest operator (...num1). Yes it is same as spread operator, it is only depend on use case only. And now we declare as many number as we want.
    return num1
}
// console.group(calculateCartPrice(2)); //OUTPUT - [ 2 ]
// console.group(calculateCartPrice(200, 400, 500, 2000)); //OUTPUT - [ 500, 2000 ]

const user = {
    username: "hitesh",
    price: 199,
}

// function handleObject(anyObject){
//     console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
// }
// handleObject(user)

//Another method
// handleObject({
//     username: "sam",
//     price:399,
// })

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray)); //OUTPUT - 400
console.log(returnSecondValue([200, 400, 500, 1000])); //OUTPUT - 400