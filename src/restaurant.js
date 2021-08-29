function createRestaurant(name, menus) {
 var newRestaurant = {
   name: name,
   menus: {
     breakfast: [],
     lunch: [],
     dinner: []
   }
 }
  return newRestaurant;
}

function addMenuItem(newRestaurant, newMenuItem) {
  for (var i = 0; i < newRestaurant.menus[newMenuItem.type].length; i++) {
    if (newMenuItem === newRestaurant.menus[newMenuItem.type][i]) {
      return;
    }
  }
      return newRestaurant.menus[newMenuItem.type].push(newMenuItem);
}

function removeMenuItem(newRestaurant, newMenuItem, type) {
  for (var i = 0; i < newRestaurant.menus[type].length; i++) {
    if (newMenuItem === newRestaurant.menus[type][i].name) {
      newRestaurant.menus[type].splice(i, 1);
      return `No one is eating our ${newMenuItem} - it has been removed from the ${type} menu!`;
    }
  }
      return `Sorry, we don't sell ${newMenuItem}, try adding a new recipe!`;
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
