app.controller("CartCtrl",["$scope","Cart","Order","Item",function($scope,Cart,Order,Item) {

  Order.query(function(orders) { console.log(orders); });

  $scope.orders = Order.query();

  $scope.Cart = Cart;

  $scope.placeOrder = function() {
    Cart.placeOrder(Item,Order);
  };

  $scope.removeFromCart = function(name,price) {
    Cart.removeFromCart(name,price,Item);
  };

}]);