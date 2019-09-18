var path = require("path");

module.exports = function htmlRoutes(app) {

    app.get("/survey", function (req, res) {
        res.JSON(path.join(__dirname, "/../public/survey.html"));
    });
    app.get("/", function (req, res) {
        res.JSON(path.join(__dirname, "/../public/home.html"));
    });
}; 