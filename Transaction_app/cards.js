"use strict";
exports.__esModule = true;
var express = require("express");
var Cards = express.Router();
Cards.get('/', function (req, res) {
    res.status(200).json({ "Message": "Welcome to Cards Module" });
});
exports["default"] = Cards;
