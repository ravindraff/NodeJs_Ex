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


