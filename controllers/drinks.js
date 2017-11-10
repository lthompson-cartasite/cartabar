// a simple controller that serves up code-generated content

const express = require('express');
const router = express.Router();

// load the data model
// todo: automatically reload changes to this file at runtime
const drinks = require('../models/drinks.json');

router.get('/', allDrinks);
router.get('/:drinkKey', oneDrink);
router.get('/names', drinkNames);

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

module.exports = router;