const path = require("path");

console.log(path.dirname("D:/Nodejs/04_pathModule/demo.js"));

console.log(path.extname("D:/Nodejs/04_pathModule/demo.js"));

console.log(path.basename("D:/Nodejs/04_pathModule/demo.js"));

console.log(path.parse("D:/Nodejs/04_pathModule/demo.js"));

const myPath = path.parse("D:/Nodejs/04_pathModule/demo.js");
console.log(myPath.name);