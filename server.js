//Your server.js file should require the basic npm packages we've used in class: express and path.

//==============DEPENDENCIES==============
var express = require("express");
//var fs = require('fs');

//==============EXPRESS CONFIGURATION==============

//initialize an express server
var app = express();

//sets an initial port and allows heroku to choose the port later
var PORT = process.env.PORT || 8080;

//express app handling data parsing » copy/paste
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//==============REQUIRE ROUTES==============

//route to api data
require("./app/routing/apiroutes")(app);

//reoute to html page handling
require("./app/routing/htmlroutes")(app);

//==============LISTENER==============

//server starts
app.listen(PORT, function () {
    console.log("We are listenting on PORT: " + PORT);
});
