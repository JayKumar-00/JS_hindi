// arrays :- If we acopy array then it gives shallow copy(means it uses Heap memory{reference it make changes to original also} if we made changes in any it change to both)

const myArr = [0, 1, 2, 3, 4, 5]
const arr = [1, 2];
// console.log(arr.unshift(0)); // [0, 1, 2] , Inserts new elements at the start of an array, and returns the new length of the array
// console.log(arr.shift()); //It remove the first element of array and return it. If the array is empty, undefined is returned and the array is not modified.

const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[0]);

//Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// console.log(myArr);
// myArr.shift()

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))


const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//slice, splice

console.log("A", myArr);
const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2);
