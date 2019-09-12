// DEPENDENCIES
var path = require('path');
var express = require("express");

//LOCAL PORT
var PORT = 7000;

var app = express();














app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});