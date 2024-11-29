//Immediately Invoked Function Expression(IIFE)
/*
    ()() - Here first is to declare function and second one is to execute the function
     Due to the problem cause by the pollution of global scope, so to prevent the problem caused by the global variable or any declaration we use IIFE (Immediately Invoked Functio Expression).
*/

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
