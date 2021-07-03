"use strict";
exports.__esModule = true;
var express = require("express");
var accounts = express.Router();
accounts.get('/', function (req, res) {
    res.status(200).json({
        message: "accounts soon...!"
    });
});
accounts.get('/acc', function (req, res) {
    res.status(200).json({ message: "accounts data soon...!" });
});
exports["default"] = accounts;
