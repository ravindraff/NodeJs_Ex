"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var bodyParser = require("body-parser"); //for typscript code only, use require for js
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var auth = function (req, res, next) {
    var allHeaders = req.headers;
    var token = allHeaders.token;
    if (token === "nodejs") {
        next();
    }
    else {
        res.status(500).json({
            auth: "Authentication failed"
        });
    }
};
app.post('/login', [auth], function (req, res) {
    var uname = req.body.uname;
    var upwd = req.body.upwd;
    if (uname === "admin" && upwd === "admin") {
        res.status(200).json({ message: "Login Successfully" });
    }
    else {
        res.status(401).json({ message: "Login Failure" });
    }
});
app.listen(8080, function () {
    console.log("server started successfully on port ");
});
