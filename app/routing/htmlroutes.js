/*Your htmlRoutes.js file should include two routes:

1) GET 
Route to /survey which should display the survey page.

2) DEFAULT
catch-all route that leads to home.html which displays the home page.. */

//==============DEPENDENCIES==============

//require FS to retrieve html files » from hotter res. defaul npm
var path = require("path");

//==============ROUTE HANDLING==============

//make routing happen
module.exports = function(app) {

    //1) GET survey
    app.get('../public', function(req,res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    });

    //2) DEFAULT
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    });
}