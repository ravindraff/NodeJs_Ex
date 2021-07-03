"use strict";
exports.__esModule = true;
var express = require("express");
var transaction = express.Router();
var auth1 = function (req, res, next) {
    var allHeaders = req.headers;
    var token = allHeaders.token;
    if (token === "admin") {
        next();
    }
    else {
        res.status(402).json({ "Message": "Token Authentication Failure" });
    }
};
var auth2 = function (req, res, next) {
    var allHeaders = req.headers;
    var wish = allHeaders.wish;
    if (wish === "hello") {
        next();
    }
    else {
        res.status(402).json({ "Message": "Wish Authentication Failure" });
    }
};
transaction.get('/login', [auth1, auth2], function (req, res) {
    var uname = req.query.uname;
    var upwd = req.query.upwd;
    if (uname === "admin" && upwd == "admin") {
        res.status(200).json({ "Login": "Trans Login Successfully" });
    }
    else {
        res.status(401).json({ "Login": "Trans Login Failure" });
    }
});
exports["default"] = transaction;
//http://localhost:8080/Transaction/login?uname=admin&upwd=admin
