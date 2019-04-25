//You should save your application's data inside of app/data/friends.js these objects should roughly follow the format below.

//==============DATABASE==============

var friends = [
    {
        'name': 'Ahmed',
        'photo':"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        'scores':[5, 1, 4, 4, 5, 1, 2, 5, 4, 1,]
    },
    {
        'name': 'Stevie Steve',
        'photo':"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        'scores':[1, 1, 1, 1, 1, 1, 1, 1, 1, 1,]
    }

];

//==============FILE ACCESSIBILITY==============

//used to export the array
module.exports = friends;