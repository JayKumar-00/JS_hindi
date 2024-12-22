function SetUsername(username){
    // complex DB calls
    this.username = username
    console.log("called");
    
}

function createUser(username, email, password){
    // SetUsername(username) // Here it called but after calling it leave the call stack and its all variable is also remove
    SetUsername.call(this, username) // So to call its inner variable, we have to use call keyword to hold the reference

    this.email = email
    this.password = password
}

const chai = new createUser("hitesh", "chai@fb.com", "123")
console.log(chai);
