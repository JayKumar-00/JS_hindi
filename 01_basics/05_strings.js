const name = "User"
const repoCount = 50
console.log(name + repoCount + " value")
//better/modern way to write above line is string interpolation (`` ; called backtick),in this we can also call method also 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("User-Js-Java")
// console.log(gameName)
// console.log(gameName[0])
// console.log(gameName.__proto__) //It is one of the syntax to access the methods,but it can directly be access it can be use in console in browser
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
console.log(gameName.indexOf('J'))

const newString = gameName.substring(0,4) //Here we cannot use the negative number
console.log(newString);

const anotherString = gameName.slice(-5,5) //Here we can use the negative number
console.log(anotherString)

const newStringOne = "  User-JS  "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'))
console.log(url.includes('hitesh'))
console.log(gameName.split('-'))