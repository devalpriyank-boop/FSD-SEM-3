import fs from "fs";

fs.stat("notes.txt",(err, stats)=>{
    if (err){
        console.log(err);
        return;
    }
   console.log("Information of [notes.txt]",stats);
   console.log("Size of the file:",stats.size,"Bytes");
   console.log("Birth time of the file ", stats.birthtime.toISOString().split("o")[0]);
   console.log("Modification time of thr file:",stats.mtime.toISOString());
   console.log("Access time of file:",stats.atime.toISOString());
   console.log("change time of file:",stats.ctime.toISOString());
   console.log("Is this is a file:",stats.isFile())
});