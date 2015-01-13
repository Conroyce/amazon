app.controller("CartCtrl",["$scope","Cart",function($scope,Cart) {

  Order.query(function(orders) { console.log(orders); });

  $scope.orders = Order.query();

  $scope.Cart = Cart;

}]);