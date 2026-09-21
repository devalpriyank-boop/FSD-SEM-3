import fs from 'fs'

fs.watchFile("notes.txt",(prev,curr)=>{
    //console.log("Previous",prev);
    //console.Log("Current",curr);
    if(pre!==curr){
        console.log("file has been modified");
    }
});