let http = require("http");
let server = http.createServer(
    (req, res) =>{
        res.write("welcome to http server");
        res.end();
     }
);
server.listen(8080);
console.log("server listening on port no. 8080");


