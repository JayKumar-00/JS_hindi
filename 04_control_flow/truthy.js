const userEmail = []

if (userEmail) {
    console.log("Got user Email");
} else{
    console.log("Don't have user Email");
    
}

//falsy value

//false, 0, -0, BigInt 0n, "", null, undefined, Nan

//truthy values
//"0", 'false', " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is Empty");
    
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){ //because it will give value as array
        console.log("Object is Empty ");

}

//Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 15 ?? 20

console.log(val1);

//Ternary Operator

// condition ? true : false

const iceTea = 100
iceTea <= 80 ? console.log("less than 80") : console.log("more than 80");

