/*Your apiRoutes.js file should contain two routes: 

1) GET 
A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.

2) POST
A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. */

//==============LOAD DATA==============

//require our data source
var friendData = require("../data/friends");

//==============ROUTE HANDLING==============

//make routing happen
module.exports = function (app) {
    
    //1) GET
    app.get("../data", function (req, res) {
        res.json(friendData);
    });

    //2) POST
    app.post("../data", function (req, res) {
        req.body.server = dataArray.push(req.body);
        res.json(req.body);
    });
};