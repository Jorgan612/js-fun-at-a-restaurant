function nameMenuItem(foodName) {
  return `Delicious ${foodName}`;
}

function createMenuItem(name, price, type) {
 var menuItem = {
   name: name,
   price: price,
   type: type
 }
 return menuItem;
}

function addIngredients(foodItem, ingredients) {
  for (var i = 0; i < ingredients.length; i++) {
    if (foodItem === ingredients[i]) {
      return;
    }
  }
  ingredients.push(foodItem);
}

function formatPrice(price) {
  return `$${price}`;
}

function decreasePrice(price) {
  return price - (price * 0.1);
}

function createRecipe(title, ingredients, type) {
  var newRecipe = {
    title: title,
    ingredients: ingredients,
    type: type
  }
  return newRecipe;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
