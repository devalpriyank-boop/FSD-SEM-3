// Create an HTTP server
// using es module syntax
import http from 'http';

const server = http.createServer((req, res) => {
    console.log("hello")
    res.setHeader("Content-Type", "text/plain");
    res.end("Welcome from server")
})

const order = {
    orderId: 123,
    ordername: "Laptop",
};



const PORT = 3000;
const ADDRESS = "127.0.0.1";

server.listen(PORT, ADDRESS, () => {
    console.log("server is running ...");
});