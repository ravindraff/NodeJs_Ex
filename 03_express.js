"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    res.status(200).json({
        "message": "welcome to typescript with node js...."
    });
});
app.listen(8080, function () {
    console.log("server started successfully....");
});
