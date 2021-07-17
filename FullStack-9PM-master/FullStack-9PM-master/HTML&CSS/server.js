const http = require("http");
const url = require("url");

const server = http.createServer((req,res)=>{
    console.log(req.url);
});

server.listen(8080);
console.log("server ready with port no 8080");