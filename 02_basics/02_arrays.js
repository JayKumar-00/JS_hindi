const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros); // OUTPUT [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3]); //OUTPUT [ 'superman', 'flash', 'batman' ]
// console.log(marvel_heros[3][1]); // OUTPUT flash

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros); //OUTPUT [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


//spread Operator (more prefered, because more than one value can be use), but in above one variable at a time in concat method
const all_new_heros = [...marvel_heros, ...dc_heros] //Here we can add more variable with (...xyz)

console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth. and value can pass up to how many depth or simply infinity means all

console.log(real_another_array);


console.log(Array.isArray("hitesh")); // false
console.log(Array.from("hitesh")); // OUTPUT [ 'h', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})); // INTERESTING!! It will give the empty array []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2,score3)); // OUTPUT [ 100, 200, 300 ]
