"use strict";
exports.__esModule = true;
var express = require("express");
var cards_1 = require("./cards");
var transaction_1 = require("./transaction");
var accounts_1 = require("./accounts");
var app = express();
app.use("/Cards", cards_1["default"]);
app.use("/Trans", transaction_1["default"]);
app.use("/Account", accounts_1["default"]);
app.listen(8080, function () {
    console.log("server started successfully");
});
