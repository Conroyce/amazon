app.controller("CartCtrl",["$scope","Cart","Order","Item",function($scope,Cart,Order,Item) {

  Order.query(function(orders) { console.log(orders); });

  $scope.orders = Order.query();

  $scope.Cart = Cart;

  // var updateQuantity = function(newQuantity, id) {
  //   console.log(newQuantity+" "+id);
  //   var updatedItem = Item.Item.get({id:id}, function(item) {
  //     item.quantity -= newQuantity;
  //     item.$update();
  //   });
  // }; 

  // var addOrder = function(name,total) {
  //   var order = new Order({person:name,cost:total});
  //   order.$save();
  // };

  $scope.placeOrder = function() {
    Cart.placeOrder(Item,Order);
  };

  // var increaseQuantity = function(name, quantity) {
  //   console.log(Item.items.length,"a");
  //   Item.items.forEach(function(item) {
  //     if (item.name === name) {
  //       item.quantity += quantity.quantity;
  //     }
  //   });

    // var len = $scope.items.length;
    // for (var i = 0; i < len; i++) {
    //   if ($scope.items[i].name === name) {
    //     $scope.items[i].quantity += quantity;
    //   }
    // }
    // Cart.items.forEach(function(item) {
    //   if (item.name === name) {
    //     $scope.quantity += quantity;
    //   }
    // });

  $scope.removeFromCart = function(name,price) {
    Cart.removeFromCart(name,price,Item);
  };

}]);