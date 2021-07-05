"use strict";
exports.__esModule = true;
var express = require("express");
var mongodb = require("mongodb");
var ramIT = mongodb.MongoClient;
var fetch = express.Router().post('/', function (req, res) {
    ramIT.connect("mongodb+srv://nodejs_usr:admin@cluster0.6mktf.mongodb.net/nodjs_db?retryWrites=true&w=majority", function (err, connection) {
        if (err)
            throw err;
        else {
            var db = connection.db("nodejs_db");
            db.collection("products").insertOne({
                "id": req.body.id,
                "name": req.body.name,
                "quantity": req.body.quantity,
                "price": req.body.price,
                "category": req.body.category,
                "image": req.body.image
            }, function (err, result) {
                if (err)
                    throw err;
                else {
                    res.send({ "Message": "document inserted successfully!!!!" });
                }
            });
        }
    });
});
exports["default"] = fetch;
