"use strict";
exports.__esModule = true;
var express = require("express");
var Transaction = express.Router();
Transaction.get('/', function (req, res) {
    res.status(200).json({ "Message": "Welcome to Transaction Module" });
});
exports["default"] = Transaction;
