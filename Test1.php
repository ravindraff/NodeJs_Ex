=>npm i -g yarn
=>npm i express mongodb mongoose mysql --save
			(or)
=>yarn add express mongodb mongoose mysql --save

GitHub:
	User:ravindra.m568@gmail.com
	Pwd :Ravi(#12)

	git add .
	git commit -m "first commit"
	git status 
    git push



1.ex:
	let http = require("http");
	let server = http.createServer(
		(req, res) =>{
			res.write("welcome to http server");
			res.end();
		}
	);
	server.listen(8080);
	console.log("server listening on port no. 8080");

2.ex:
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
