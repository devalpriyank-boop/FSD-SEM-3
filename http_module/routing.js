import http from 'http'
import fs from 'fs'

/*const server = http.createServer((req,res)=>{
    res.end("Welcome from server")
})

server.listen(3000,()=>{
    console.log("Sever is running.....");
})*/



/*
const server = http.createServer((req,res)=>{
    //res.end("Welcome from the server")
    if(req.url==="/"){
        res.end("home page")
    }else if(req.url==="/contact"){
        res.end("contact page")
    }else if(req.url==="/projects"){
        res.end("project page")
    }else{
        res.end("page not found")
    }
})

server.listen(3000,()=>{
    console.log("Sever is running.....");
});*/

const data=fs.readFileSync("./pageNotFound.html")


 
const server = http.createServer((req, res)=>{
    // res.end("welcome from server")
    if(req.url === "/home"){
        res.end("Home Page")
    }else if(req.url === "/contact"){
        res.end("Contact Page")
    }else if(req.url === "/projects"){
        res.end("Projects Page")
    }else{
        res.end(data)
    }
})

server.listen(3000, ()=>{
    console.log("Server is Running...")
})