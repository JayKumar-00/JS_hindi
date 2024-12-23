class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")
chai.addCourse()
chai.logMe()

const masalaChai = new User("masalaChai")
masalaChai.logMe()
// console.log(chai === masalaChai); // OUTPUT - false
// console.log(chai === Teacher); // OUTPUT - false
// console.log(chai instanceof Teacher); // OUTPUT - true
console.log(chai instanceof User); // OUTPUT - true