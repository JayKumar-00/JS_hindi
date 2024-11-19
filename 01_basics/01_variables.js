const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
//It is not a good practice to use var, but it is also work as var and reserve memory in the form of "var"
accountCity= "Jaipur"
let accountState;

/*
var is not in use currently due to scope resolution ("{}"), because initially if we are using same variable name and made changes then it make to all the varaible of same name. So now almost everywhere user only use "let" & "const"
*/

// const are constant that cannot be re-assigned or change. NOT ALLOWED
// accountId = 2

accountEmail = "hc@gmail.com"
accountPassword = "2121212"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use "var"
because of issue in block scope and functional scope.
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])