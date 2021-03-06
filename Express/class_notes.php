=>npm i -g yarn
=>npm i express mongodb mongoose mysql --save
			(or)
=>yarn add express mongodb mongoose mysql --save
=>yarn add express body-parser  @types/express @types/body-parser  --save
=>npm i express body-parser cors mongodb mongoose   @types/express @types/body-parser @types/cors @types/mongodb 
@types/mongoose  --save


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


################################################################
mongodb
===============
URl:https://www.mongodb.com/cloud/atlas
Connect to DB : mongodb+srv://myproject:<password>@cluster0.6mktf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority


database : nodejs_db
collection : products
user: nodejs_usr
pwd:admin
Connect to DB : mongodb+srv://nodejs_usr:admin@cluster0.6mktf.mongodb.net/nodjs_db?retryWrites=true&w=majority


{
	"_id":{"$oid":"60e2c8b7dba3f42c87e8ac69"},
	"id":{"$numberInt":"4"},
	"name":"Star",
	"quantity":{"$numberInt":"100"},
	"price":{"$numberInt":"1000"},
	"category":"AC",
	"image":"https://ecommerce-9am.s3.ap-south-1.amazonaws.com/p4.jpg"
}