// a simple controller that serves up code-generated content

const express = require("express");
const router = express.Router();

// load the data model
// todo: automatically reload changes to this file at runtime
const ingredients = require("../models/ingredients.json");

router.get("/", allIngredients);
router.get("/:ingredientsKey", oneIngredient);
router.get("/names", ingredientNames);

function ingredientNames(req, res) {
  // look through the data file and create a list of drink names
  let ingredientNames = ingredient.map(ingredient => {
    return ingredient.name;
  });

  res.send(ingredientNames);
}

// list all drink recipes
function allIngredients(req, res) {
  // return a list of all drinks as json
  res.send(ingredients);
}

function oneIngredient(req, res) {
  // find the specific drink recipe
  let ingredientKey = req.params.ingredientKey;

  let ingredient = ingredient[ingredientKey];
  if (ingredient) res.send(ingredient);
  else
    res.sendStatus(
      404,
      `Unable to find an ingredient with an id of '${ingredientKey}'`
    );
}

module.exports = router;
