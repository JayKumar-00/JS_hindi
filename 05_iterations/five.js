const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

//arraow function
// coding.forEach( (item) => {
//     console.log(item);
// } )


// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach ( (item, index, arr) => {
//     console.log(item, index, arr); 
// } )

const myCoding = [
    {
        lanuage: "javascript",
        languageFileName: "js"
    },
    {
        lanuage: "java",
        languageFileName: "java"
    },
    {
        lanuage: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.lanuage);
} )