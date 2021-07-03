"use strict";
exports.__esModule = true;
var express = require("express");
var transaction = express.Router();
transaction.get('/', function (req, res) {
    res.status(200).json({
        message: "transaction soon...!"
    });
});
transaction.get('/trans', function (req, res) {
    res.status(200).json({ message: "transaction data soon...!" });
});
exports["default"] = transaction;
