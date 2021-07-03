"use strict";
exports.__esModule = true;
var express = require("express");
var transaction_1 = require("./transaction");
var account_1 = require("./account");
var cards_1 = require("./cards");
var app = express();
app.use("/Accounts", account_1["default"]);
app.use("/Transaction", transaction_1["default"]);
app.use("/Cards", cards_1["default"]);
app.listen(8080, function () {
    console.log("server started successfully");
});
