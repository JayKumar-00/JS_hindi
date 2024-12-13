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