/*Your htmlRoutes.js file should include two routes:

1) GET 
Route to /survey which should display the survey page.

2) DEFAULT
catch-all route that leads to home.html which displays the home page.. */

//==============DEPENDENCIES==============

//require FS to retrieve html files » from hotter res. default npm
var path = require("path");

//==============ROUTE HANDLING==============

//make routing happen
module.exports = function(app) {

    //1) GET => the survey.html
    app.get('/survey', function(req,res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    });

    //2) DEFAULT => path leads us home.html
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    });
}