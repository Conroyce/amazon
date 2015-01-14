app.controller("PastOrders",["$scope","Order",function($scope,Order) {
  Order.query().$promise.then(function(orders){
    orders.map(function(order) {
      if (!order.person) {
        order.person = "Guest";
      }
    });
    $scope.orders = orders;
  });
}]);