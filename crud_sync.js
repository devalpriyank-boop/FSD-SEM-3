const fs = require("fs")

//Imolement CRUD opration using Node.js 'fs' module
//1.Crreat a file
fs.writeFileSync("notes.txt","Hello node.js")
//2.Read the content of the file
const data = fs.readFileSync("notes.txt","utf8")
console.log("Read Data:",data);

//3. update the content of the file
fs.appendFileSync("notes.txt","Hello Mr.Priyank")
//4.Delete the file
fs.rmSync("notes.txt")