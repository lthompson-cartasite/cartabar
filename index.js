// main app entry point

// load required modules
const express = require('express');
const bodyParser = require('body-parser');
//const rootController = require('./controllers/root');
const drinkController = require('./controllers/drinks');

// create a new express app
const app = express();

// install the bodyparser middleware to decode POST bodies into json
app.use(bodyParser.json());

// something to handle unexpected errors in the javascript
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// add routes to serve static content
// todo: move the public folder to the /public path and provide an explicit '/' route to the index.html file
app.use('/', express.static('public'));

// setup the routes to your controllers
app.use('/drinks', drinkController);

// a final route that catches everythign else
app.get('*', function(req, res){
    res.status(404).send(`404: I can't find any resources named "${req.url}"`);
});

// start listening for requests on port 3000
app.listen(3000);