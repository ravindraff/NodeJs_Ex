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

/*http://localhost:8080      ==>(get,post)
http://localhost:8080/demo ==>(get,post) */




