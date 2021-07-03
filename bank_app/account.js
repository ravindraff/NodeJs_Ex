"use strict";
exports.__esModule = true;
var express = require("express");
var accounts = express.Router();
accounts.get('/', function (req, res) {
    res.status(200).json({ "message": "Welcome to Accounts Module" });
});
accounts.get('/login', function (req, res) {
    var uname = req.query.uname;
    var upwd = req.query.upwd;
    if (uname === "admin" && upwd == "admin") {
        res.status(200).json({ "Login": "Login Successfully" });
    }
    else {
        res.status(401).json({ "Login": "Login Failure" });
    }
});
exports["default"] = accounts;
//http://localhost:8080/Accounts
//http://localhost:8080/Accounts/login?uname=admin&upwd=admin
