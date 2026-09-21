import fs from 'fs'

fs.symlink("notes.txt","link set",(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Symbolic link created");
});
