let http = require('http');
let url = require('url');
let server = http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type': 'text/html'});
    
    let obj = url.parse(req.url).query;

    res.write("<h1>"+obj+"</h1>")

   /*  res.write(obj.uname);
    res.write(obj.pwd); */
    

    if (obj.uname === "admin" && obj.pwd === "admin") {        
        res.write("<h1>Login Success</h1>")
    } else {
        res.write("<h1>Login Failure</h1>")
    }
    res.end();
})
server.listen(8080)
console.log("server listening on port no.  8080")