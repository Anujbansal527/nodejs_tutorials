//creating api
const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res) =>
{
    if(req.url == "/"){
        res.end("Hello!! welcome to home page");
    }else if(req.url =="/about"){
        res.end("Hello!! welcome to about page");
    }else if(req.url =="/contact"){
        res.end("Hello!! welcome to contact page");
    }else if(req.url=="/api"){
        fs.readFile(`${__dirname}/demo.json`,"utf-8",(err,data)=>
        {
           const objData =JSON.parse(data);
           res.end(objData[0]);
        });
        res.end("user api");
    }else{
        res.writeHead(404,{"Content-type": "text/html"});
        res.end("<h1>404 Error Page,Page doesn't exist</h1>");
    }
});

server.listen(8000, "127.0.0.1", ()=>{
    console.log("listening to port no 8000");
})