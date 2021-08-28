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
  // for (var i = 0; i < newRestaurant.menus[newMenuItem.type.length]; i++) {

    // console.log(newRestaurant.menus[newMenuItem.type.length])
    // console.log(newRestaurant.menus[newMenuItem[i]]);
    console.log('1', newMenuItem.name);
    if (newMenuItem.name === newRestaurant.menus[newMenuItem.type]) {
      console.log('2', newRestaurant.menus[newMenuItem.type]);

      // console.log(newRestaurant.menus[newMenuItem[i]]);
      return 'test';
    } else {
      return newRestaurant.menus[newMenuItem.type].push(newMenuItem);
    }
  // }
}

module.exports = {
  createRestaurant,
  addMenuItem,
  // removeMenuItem
}
