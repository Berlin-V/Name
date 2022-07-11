const fs = require("fs");
//import the fs pakage
const buffer = fs.readFileSync("names.txt");
//Reading the file by using fs.readFileSync

const fileContent = buffer.toString();
//buffer is used to perform operation on raw binary data
//.toString is used to convert it into strinig

const val=fileContent.split('\r\n');
//.split is used to split the array
console.log(val)

const num=(Math.floor(Math.random() * 20000));
//Math.floor is used to give a whole value
//Math.randon is uset to generate random value 
console.log(num);

const name=val[num];
//val[num]is used to give a array in the num position
console.log(name)

