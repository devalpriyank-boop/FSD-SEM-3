// const http = require('http');--->  common js method 
// import http from "http";----> ES module

import http from "http";

const server = http.createServer((req,res)=>{
    console.log("NO FLUKE!!!!")
    res.statusCode=404
    res.setHeader("Content-Type",'text/plain')
    res.end("Welcome to the server")
})
const PORT=3000
const ADDRESS="127.0.0.1"
server.listen(PORT,ADDRESS,()=>{
    console.log("Server is runing....");

})