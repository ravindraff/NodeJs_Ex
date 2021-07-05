"use strict";
exports.__esModule = true;
var express = require("express");
var Account = express.Router();
Account.get('/', function (req, res) {
    res.status(200).json({ "Message": "Welcome to Account Module" });
    res.end();
});
exports["default"] = Account;
