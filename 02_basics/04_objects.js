// First way to declare objects
// const tinderUser = new Object() //It is singleton object

//Second way to declare objects
const tinderUser = {} //It is not a singleton object, this is the only difference between them.
tinderUser.id = "123abc"
tinderUser.name = "User_Js"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// This is called nested object it can be nested as many as we want
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "User",
            lastname: "Js"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1 ,obj2) //It can also be declare in this way, but better way is to use {} before Object.assign({}, obj1 ,obj2), because if don't do it then practically it all copy in obj1 [NOTE : Both will give the same output]
// const obj3 = Object.assign({}, obj1 ,obj2) //This way is also less useable, because we will use spread Operator (...xyz, ...abc)
const obj3 = {...obj1, ...obj2}
console.log(obj3)

//This is called array of objects
const users = [ //This is array
    //This is object
    {
        id: 1,
        email: "user@gmail.com"
    },
    {
        id: 10,
        email: "userJava@gmail.com"
    },
    {
        id: 12,
        email: "useJsr@gmail.com"
    }
]

console.log(users[1].email)
console.log(tinderUser);

console.log(Object.keys(tinderUser)); //It convert object's key into array OUTPUT - [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); //It convert object's values into array OUTPUT - [ '123abc', 'User_Js', false ]
console.log(Object.entries(tinderUser)); //It convert object's key-values pairs into array OUTPUT - [ [ 'id', '123abc' ], [ 'name', 'User_Js' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLogged'));