const express = require("express");
const app = express();
const PORT = 4454;
const recipes = require("./recipes.json");
const categoriesTemplate = require("./categories.json");

const categories = categoriesTemplate.map(category => 
  ({
    ...category, 
    values: category.values.map(subCategory => 
      ({
        ...subCategory, 
        recipes: recipes.filter(recipe => recipe[category.name] === subCategory.name)
      })
    )
  })
);

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  next();
});

app.get("/recipes", (req, res) => {
  res.send(recipes);
});

app.get("/recipe/:recipeId", (req, res) => {
  const recipeId = parseInt(req.params.recipeId);
  const foundRecipe = recipes.find((it) => it.id === recipeId);
  if (!foundRecipe) {
    throw res.status(404).send({ errorMessage: `Recipe does not exist` });
  }
  res.send(foundRecipe);
});

app.put("/recipe/:recipeId", (req, res) => {
  const recipeId = parseInt(req.params.recipeId);
  const foundRecipeId = recipes.findIndex((it) => it.id === recipeId);
  if (foundRecipeId === -1) {
    throw res.status(404).send({ errorMessage: `Recipe does not exist` });
  }
  recipes[foundRecipeId] = req.body;
  res.send(req.body);
});

app.post("/recipe", (req, res) => {
  const newRecipe = { ...req.body, id: recipes.length };
  recipes.unshift({ ...req.body, id: recipes.length });
  res.send(newRecipe);
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get("/category/:categoryId", (req, res) => {
  const categoryId = parseInt(req.params.categoryId);
  const foundCategory = categories.find((it) => it.id === categoryId);
  if (!foundCategory) {
    throw res.status(404).send({ errorMessage: `Category does not exist` });
  }
  res.send(foundCategory);
});

app.get("/category/:categoryId/:subCategory", (req, res) => {
  const categoryId = parseInt(req.params.categoryId);
  const foundCategory = categories.find((it) => it.id === categoryId);
  if (!foundCategory) {
    throw res.status(404).send({ errorMessage: `Category does not exist` });
  }
  const subcategoryId = parseInt(req.params.subCategory);
  const foundSubcategory = foundCategory.values.find((it) => it.id === subcategoryId);
  if (!foundCategory) {
    throw res.status(404).send({ errorMessage: `Subcategory does not exist` });
  }
  res.send(foundSubcategory);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
