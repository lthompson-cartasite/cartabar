// a simple controller that serves up code-generated content

const express = require('express');
const router = express.Router();

// load the data models
// todo: automatically reload changes to this file at runtime
const drinks = require('../models/drinks.json');
const pumps = require('../models/pumps');

router.get('/', allDrinks);             // return the recipes for all drinks
router.get('/:drinkKey', oneDrink);     // return the recipe for just one drink
router.get('/names', drinkNames);       // return a list of drink names
router.post('/:drinkKey', pourDrink);   // cause one drink to be poured

function drinkNames(req,res) {
    // look through the data file and create a list of drink names
    let drinkNames = drinks.map(drink => {
        return drink.name;
    });

    res.send(drinkNames);
}

// list all drink recipes
function allDrinks(req,res) {
    // return a list of all drinks as json
    res.send(drinks);
}

function oneDrink(req,res) {
    // find the specific drink recipe
    let drinkKey = req.params.drinkKey;

    let drink = drinks[drinkKey];
    if (drink)
        res.send(drink);
    else
        res.sendStatus(404, `Unable to find a drink with an id of '${drinkKey}'`);
}

function pourDrink(req,res) {
    // find the specific drink recipe
    let drinkKey = req.params.drinkKey;

    let drink = drinks[drinkKey];
    if (drink) {
        // if the Raspberry pi is connected to a teapot and the drink is coffee, return an error
        // NOTE: this is an IETF April Fool's joke, implemented here because I'm a goofball
        if (drink.name === "coffee")
            return res.sendStatus(418, `I'm a teapot. I don't make coffee`);

        // todo: implement a way to map liquor names to pump numbers

        // todo: use the recipe to determine which pumps to fire

        // todo: implement logic to determine if the required pumps are enabled. set this to false if they are not
        let canPour = true;

        // if we are unable to pour the drinks. return an error message
        if (!canPour)
            return res.sendStatus(503, `One of the required pumps is not currently avaliable, please try again later.'${drinkKey}'`);

        // todo: calculate how long to turn on each pump
        // when calling the activate funciton, volume is in ml

        // example: turns on pump 2 and pours 1/2 oz of liquid
        pump.activate(2, .5);

        // indicate that the drink was poured successfully
        res.send({
            name: drink.name,
            success: true
        });
    }
    else
        res.sendStatus(404, `Unable to find a drink with an id of '${drinkKey}'`);
}

module.exports = router;