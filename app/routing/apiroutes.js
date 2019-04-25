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
        res.json(friendData);
    });

    //2) POST => a POST call at the route will store the new friend and respond with a bestFriend
    app.post("/api/friends", function (req, res) {

        //============== DATA HANDLING ==============

        //store the newFriend object
        var newFriend = req.body;

        //declare variables to hold new scores
        var newScore; //the score for the person submitting the survey
        var bestScore; //the score of the friends array that matches

        //declare a variable to hold the newFriend and bestFriend friendiness
        var matchScore;

        //declare an object to hold the bestFriend
        var myFriend = {
            name: "",
            photo: "",
            bfScore: 333
        }

        //============== SCORING CONDITIONS ==============

        //loop through the friends.js file to get each entry
        for (var i = 0; i < friendData.length; i++) {

            //hold the iTH friends
            var bestFriend = friendData[i];
            //console.log(bestFriend.name);

            //set the matchScore in the iTH loop to zero
            matchScore = 0;

            //loop through the iTH score and get the match
            for (var f = 0; f < bestFriend.scores.length; f++) {

                //assign scores to the declared variables
                bestScore = bestFriend.scores[f];
                newScore = newFriend.scores[f];

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
    
    //============== RESPONSES ==============

    //'push' the newFriend to the friends.js file
    friendData.push(newFriend);

    //respond with a bestFriend to the survey.html file
    res.json(myFriend)

    console.log(myFriend);

    //alert(myFriend.name);

    });
};