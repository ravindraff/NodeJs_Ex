"use strict";
exports.__esModule = true;
var express = require("express");
var cors = require("cors");
var bodyparser = require("body-parser");
var fetch_1 = require("./fetch/fetch");
var app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use("/fetch", fetch_1["default"]);
app.listen(8080, function () {
    console.log("server started successfully");
});
