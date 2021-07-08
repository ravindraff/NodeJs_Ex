var express = require("express");
var mongodb = require("mongodb");
var aIT = mongodb.MongoClient;
var app = express();
app.get('/getproducts', function (req, res) {
    aIT.connect("mongodb+srv://nodejs_usr:admin@cluster0.6mktf.mongodb.net/nodjs_db?retryWrites=true&w=majority", function (err, connection) {
        if (err)
            throw err;
        else {
            var db = connection.db("nodejs_db");
            db.collection("products").find().toArray(function (err, array) {
                if (err)
                    throw err;
                else {
                    res.send(array);
                }
            });
        }
    });
});
app.listen(8080,()=>{
    console.log("server started successfully..........")
});
