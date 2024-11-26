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

console.log("Result: ", result); //OUTPUT - Result: 8

function loginUserMessage(username = "sam"){ //Here we declare the username so that if user didn't enter the name then by default it gives sam OR if we user enter the name then it gives user's input
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("User_Js")); //OUTPUT - User_Js just logged in
console.log(loginUserMessage("")); //OUTPUT -  just logged in
console.log(loginUserMessage()); //OUTPUT - Please enter a username undefined \n just logged in