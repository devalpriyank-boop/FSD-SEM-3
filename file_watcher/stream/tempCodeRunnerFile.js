import fs from "fs";
//readable stream
const readstream =fs.createReadStream("intro.txt",{encoding:"utf8",highWaterMark:10})
readstream.on("data", (chunk) => {
    console.log("data is received");
    console.log("data :", chunk);
});