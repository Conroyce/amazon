app.factory('Cart',[function() {
  var updateQuantity = function(newQuantity, id, Item) {
    console.log(newQuantity+" "+id);
    var updatedItem = Item.Item.get({id:id}, function(item) {
      item.quantity -= newQuantity;
      item.$update();
    });
  } 

  var addOrder = function(name,total,Order) {
    var order = new Order({person:name,cost:total});
    order.$save();
  };

  var placeOrder = function(Item,Order) { //$scope
    this.items.forEach(function(item) {
      updateQuantity(item.quantity,item.id,Item)
    });

    addOrder(this.name,this.total,Order);
    this.items = [];
    this.total = 0;
    this.name = "";
  };

  var increaseQuantity = function(name, quantity, Item) {
    console.log(Item.items.length,"a");
    Item.items.forEach(function(item) {
      if (item.name === name) {
        item.quantity += quantity.quantity;
      }
    });
  };
  
  var removeFromCart = function(name,price,Item) {  //$scope
    var price = 0; 

    for (var i = 0; i < this.items.length; i++) {
      if(this.items[i].name === name) {
        var res = this.items.splice(i,1);
        increaseQuantity(name,res[0],Item);
        price = res[0].quantity * res[0].price;
      }
    }

    this.total -= price;
  };  

  return {
    placeOrder: placeOrder,
    removeFromCart: removeFromCart,
    items: [],
    total: 0,
    name: ""
  };
}]);