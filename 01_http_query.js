let http = require('http');
let url = require('url');
let server = http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type': 'text/html'});
    let obj = url.parse(req.url,true).query;
    if (obj.uname === "admin" && obj.pwd === "admin") {        
        res.write("<h1>Login Success</h1>")
    } else {
        res.write("<h1>Login Failure</h1>")
    }
    res.end();
})
server.listen(8080)
console.log("server listening on port no.  8080")