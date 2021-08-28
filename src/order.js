function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    return deliveryOrders.push(order);
  }
}

function refundOrder(orderNum, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (orderNum === deliveryOrders[i].orderNumber) {
      return deliveryOrders.splice(i,1);
    }
  }
}

function listItems(deliveryOrders) {
  var orderItems = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
    orderItems.push(deliveryOrders[i].item);
  }
  return orderItems.join(", ");
}

function searchOrder(deliveryOrders, foodItem) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === foodItem) {
      return true;
      }
    }
      return false;
  }

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
