"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
//Authorization
var auth = function (req, res, next) {
    var allHeaders = req.headers;
    if (allHeaders.token === "admin") {
        next();
    }
    else {
        res.status(500).json({
            auth: "Authentication failed"
        });
    }
};
app.get('/login', [auth], function (req, res) {
    if (req.query.uname === "admin" && req.query.upwd === "admin") {
        res.status(200).json({
            login: "login successfully..."
        });
    }
    else {
        res.status(401).json({
            login: "login failed...."
        });
    }
});
app.listen(8080, function () {
    console.log("server started successfully...");
});
