const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb:'ruby',
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    // console.log(`${key} shortcut is for ${myObject[key]}`);   
}

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    console.log(key);
    console.log(programming[key]);
}


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

//This will not give the output because it is not iteratable, and the thing which is not iteratable cannot be written like that.
// for (const key in map) {
//     console.log(key);
// }