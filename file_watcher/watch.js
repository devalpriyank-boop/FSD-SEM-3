const fs = require("fs");
fs.watch("notes.txt",(eventType,filename)=>{
    console.log("event type is:${eventType}");
    console.log("filename",filename);
});