var path = require("path");
var fs = require("fs");
friends = require("./../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var totDiff;
        var diffArry = [];
        var newFriend = req.body;

        for (var i = 0; i < friends.length; i++) {
            totDiff = 0;
            for (var j = 0; j < newFriend.scores.length; j++) {
                totDiff += Math.abs(friends[i].scores[j] - newFriend.scores[j]);
            }
            diffArry.push(totDiff);
        }

        var match = diffArry.indexOf(Math.min(...diffArry));

        friends.push(newFriend);

        console.log(newFriend);

        fs.readFile(path.join(__dirname, "../data/friends.json"), "utf8", function (err, data) {
            if (err) throw err;
            var json = JSON.parse(data);
            json.push(newFriend);
            fs.writeFile(path.join(__dirname, "../data/friends.json"), JSON.stringify(json, null, 2), function (err) {
                if (err) throw err;
            });
        });
        res.json(friends[match]);
    });
}
