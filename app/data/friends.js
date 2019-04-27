//You should save your application's data inside of app/data/friends.js these objects should roughly follow the format below.

//==============DATABASE==============

var friends = [
    {
        'name': 'Ahmed',
        'photo':"https://en.wikipedia.org/wiki/Ahmed_I#/media/File:Sultan_I._Ahmet.jpg",
        'scores':[5, 1, 4, 4, 5, 1, 2, 5, 4, 1,]
    },
    {
        'name': 'Bill Doe',
        'photo':"https://www.energy.gov/sites/prod/files/styles/borealis_contributor_hero_respondxl/public/Bill_0.jpg?itok=rXE0vQPR",
        'scores':[1, 1, 4, 1, 3, 1, 1, 1, 2, 1,]
    },
        {
        'name': 'Jimmy Diggs',
        'photo':"http://weirdreview.com/wp-content/uploads/2013/01/IMG_6564.jpg",
        'scores':[1, 3, 1, 5, 2, 3, 1, 2, 1, 3,]
    }

];

//==============FILE ACCESSIBILITY==============

//used to export the array
module.exports = friends;
