=>npm i -g yarn
=>npm i express mongodb mongoose mysql --save
			(or)
=>yarn add express mongodb mongoose mysql --save
=>yarn add express body-parser  @types/express @types/body-parser  --save

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
3.ex:
	let express = require("express");
	let app = express();
	app.get("/",(req, res) =>{
	res.status(200).json({"message":"default get request...!"});
	});
	app.get("/demo",(req, res) =>{
		res.status(200).json({"message":"data from mongodb data soon...!"});
	});
	app.post("/",(req, res) =>{
	res.status(200).json({"message":"default post request...!"});
	});
	app.post("/demo",(req, res) =>{
		res.status(200).json({"message":"data from mondb data soon...!"});
	});
	app.listen(8080,(req, res) =>{
		console.log("server started successfully.....")
	});