function nameMenuItem(foodName) {
  return `Delicious ${foodName}`
}

function createMenuItem(name, price, type) {
 var menuItem = {
   name: name,
   price: price,
   type: type,
 }
 return menuItem
}

function addIngredients(ingredients) {
  var newIngredient = ingredients.unshift(ingredients)
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}
