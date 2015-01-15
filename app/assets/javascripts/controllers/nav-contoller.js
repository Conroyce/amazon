app.controller("NavCtrl",["$location","$scope",function($location,$scope) {

  $location.path("/");
  $scope.cartPath = function() {
    $location.path("/cart");
  };
  $scope.orderPath = function() {
    $location.path("/orders");
  };
  $scope.homePath = function() {
    $location.path("/");
  };

}]);  