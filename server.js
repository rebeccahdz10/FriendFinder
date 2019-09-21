// DEPENDENCIES
var path = require('path');
var express = require("express");


//LOCAL PORT
var PORT = process.env.PORT || 8080;
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


app.listen(PORT, function () {
    //TELL ME WHEN PORT IS OPEN
    console.log("Server listening on: http://localhost:" + PORT);
});