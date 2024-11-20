// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 <= 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1); // output - true
// console.log("02" > 1); // output - true

//-----------------------Avoid this type of conversion--------------------------
/*
When comparing values using relational operators (<, >, <=, >=), JavaScript converts null to a number.
null is converted to 0 in numerical contexts.
*/
// console.log(null > 0); // output - false

/*
The == operator performs type coercion, but it has specific rules.
When comparing null with a number (like 0), JavaScript does not convert null into a number. Instead:
null can only be loosely equal (==) to undefined.
Any other comparison returns false.
So, null == 0 evaluates to false because null is not coerced into 0.
*/
// console.log(null == 0); // output - false

// console.log(null >= 0); // output - true, because it convert null into 0

// console.log(undefined == 0); // output - false
// console.log(undefined <= 0); // output - false
// console.log(undefined >= 0); // output - false
// console.log(undefined > 0); // output - false
// console.log(undefined < 0); // output - false
//-----------------------Avoid this type of conversion--------------------------

// === -> It is strict equality, it check that is both data type same or not.
console.log("2" == 2); // output - true