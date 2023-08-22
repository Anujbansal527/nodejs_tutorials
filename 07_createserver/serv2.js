//Server routing

const http = require("http");

const server = http.createServer((req,res) =>
{
    console.log(req.url);

    if(req.url == "/"){
        res.end("Hello!! welcome to home page");
    }
    else if(req.url =="/about"){
        res.write("Hello!! welcome to about page");
        res.end();
    }else if(req.url =="/contact"){
        res.end("Hello!! welcome to contact page");
    }else{
        res.writeHead(404,{"Content-type" : "text/html"});
        res.end("<h1>404 Error Page,Page doesn't exist</h1>");
    }
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to port no 8000");
})