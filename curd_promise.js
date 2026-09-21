import fs from "fs/promises"
//1.read the content of file 
async function readFileContent(filename){
    const data = await fs.readFile(filename, "utf8")
    console.log(data);
}
readFileContent("notes.txt")

//2.create file 
async function writeFileMethod(filename,content) {
    await fs.writeFile(filename,content)
}
writeFileMethod("notes.txt","Hello World")