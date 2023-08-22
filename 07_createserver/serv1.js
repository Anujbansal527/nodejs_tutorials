//creating server 

const http = require("http");

const server = http.createServer((req,res) =>
{
    res.end("server is connected");
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to port no 8000");
})