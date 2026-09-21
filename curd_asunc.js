const fs = require("fs")

//1.Create the file 
fs.writeFile("notes.txt", "FS module started",(err)=>{
    if(err)
    {
        console.log(err);
        return
    }
    console.log("File written successfully");
});
//2.read the file
fs.readFile("notes.txt",(err, data)=>{
    if(err){
        console.log(data);
        return
    }
    console.log("read data:",data)
});

//3. append the content in the file
fs.appendFile("notes.txt","This data will append in the last",(err)=>{
    if(err){
        console.log(err)
    }
    console.log("Data is append successfully");
});
//4.Delete the file asynchronously
fs.rm("notes.text",(err)=>{
    if(err){
        console.log(err)
    }
    console.log("file is deleted successfully")
});