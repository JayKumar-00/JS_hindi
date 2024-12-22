// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thos: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is  ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects `);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says Hello`);
    
}

// heroPower.hitesh() // OTUPUT - hitesh is present in all objects 
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh() // OUTPUT - this gives an error as object didn't have the access of heyHitesh()

//inheritance

const User = {
    name: "chai",
    email: "chai@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport,
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher) // Here TeachingSupport uses all the property of Teacher


let anotherUsername = "Chaiaurcode    "

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.truelength()
"hitesh".truelength()
"iceTea".truelength()