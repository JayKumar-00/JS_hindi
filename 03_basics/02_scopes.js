var c = 300 //Here it still give 30 that's the reason why user avoid to use var.
let a = 250 // It is global scope
if(true){
    //Here it is block scope
    let a = 10
    const b = 20
    // var c = 30
    // console.log("INNER: ", a);
}

// console.log(a); //It will thorws an error due to scope.

// console.log(a); //It will give 250 due to global scope.

// console.log(b); //It will thorws an error due to scope.

// console.log(c); //But it didn't, Here it still give 30 that's the reason why user avoid to use var.

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); //It will throw an error due to its block scope
    two()
    
}

// one()

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website =  " youtube"
        // console.log(username + website);
    }
    // console.log(website); //It will throw an error due to its scope
}

// console.log(username); //It will throw an error due to its scope


// +++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++

console.log(addone(5)); //Its interesting it will run and give the output 6
function addone(num){
    return num + 1
}

addone(5)

// addTwo(5) //It will throw an error due to its way of declaration
const addTwo = function(num){
    return num + 2
}

addTwo(5)