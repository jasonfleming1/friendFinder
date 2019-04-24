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
    
    //1) GET => a GET call at the route will return friends data
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    //2) POST => a POST call at the route will add friend and respond with a bestFriend
    app.post("/api/friends", function (req, res) {

        //store the newFriend object
        var newFriend = req.body;

        //parse out the newFriend object
        var newName = newFriend.name;
        var newPhoto = newFriend.photo;        
        var newScores = newFriend.scores;

        //declare an object to store the bestFriend
        var bestFriend = {
            name: "",
            photo: "",
            bfScore: 0
        }

        //loop through the friends.js file to get each entry
        //loop through the "i"th friend.js and subtract the newFriend.score.each from ith's score
        //declare a variable to hold the math result
        //grab the bestFriend 
        
    });

    //'push' the newFriend to the friends.js file
    friends.push(newFriend);

    //respond with a bestFriend to the survey.html file
    //res.json(bestFriend)
};

/*==============RECYCLE BIN==============
    req.body.server = dataArray.push(req.body); 
    res.json(req.body);
    var userScore = req.body.scores
*/