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

        //============== DATA HANDLING ==============

        //store the newFriend object
        var newFriend = req.body;

        //declare variables to hold new scores
        var newScore;
        var bestScore;

        //declare a variable to hold the newFriend and bestFriend friendiness
        var matchScore;

        //declare an object to hold the bestFriend
        var myFriend = {
            name: "",
            photo: "",
            bfScore: 100
        }

        //============== SCORING CONDITIONS ==============

        //loop through the friends.js file to get each entry
        for (var i = 0; i < friends.length; i++) {

            //hold the iTH friends
            var bestFriend = friends[i];

            //set the matchScore in the iTH loop to zero
            matchScore = 0;

            //loop through the iTH score and get the match
            for (var f = 0; f < newFriend.scores.length; f++) {

                //assign scores to the declared variables
                newScore = newFriend.scores[j];
                bestScore = bestFriend.scores[j];

                //determine who the newFriend's bestFriend is by survey scores
                matchScore += Math.abs(parseInt(newScore) - parseInt(bestScore));

            }
       
            //get newFriend's bestFriend information
            if (matchScore <= myFriend.bfScore) {
                myFriend.name = bestFriend.name;
                myFriend.photo = bestFriend.photo;
                myFriend.bfScore = matchScore;
            }
        };
    });

    //============== RESPONSES ==============

    //'push' the newFriend to the friends.js file
    friends.push(newFriend);

    //respond with a bestFriend to the survey.html file
    res.json(myFriend)
};