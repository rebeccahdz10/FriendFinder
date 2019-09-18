// DEPENDENCIES
var path = require('path');
var express = require("express");


//LOCAL PORT
var PORT = process.env.PORT || 8080;
var app = express();

app.use(routes);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


app.listen(PORT, function () {
    //TELL ME WHEN PORT IS OPEN
    console.log("Server listening on: http://localhost:" + PORT);
});