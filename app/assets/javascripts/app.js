var app = angular.module("AmazonApp",["ngResource"]);

app.controller("MainCtrl",["$scope", "$resource",function($scope, $resource) {

  var Item = $resource('/items')    //{id: "@id"}, {update: {method: "PATCH"}});

  Item.query(function(items) { console.log(items); });

  $scope.items = Item.query();

  // $scope.items = Item.get({id: 5});

  // $score.clickButton = function() {
  //   $scope.quantity++;
  //   $scope.item.$delete();
  //   //$score.item.id var Item code looks for the id and sends delete request to "/items/5" or whatever id.
  // };


  $scope.cart = {items:[],total:0};

  var lowerQuantity = function(name) {
    $scope.items.forEach(function(item) {
      if (item.name === name) {
        item.quantity--;
        if (item.quantity == 0) {
          //delete item
        }
      }
    });
  };

  $scope.addToCart = function(name,price) {
    $scope.cart.total += price;
    lowerQuantity(name);
    var added = false;
    if ($scope.cart.items.length < 1) {
      $scope.cart.items.push({name:name,price:price,quantity:1});
    } else {  
      var len = $scope.cart.items.length;
      for (var i = 0; i <= len; i++) {
        if(i === len && added === false) {
          $scope.cart.items.push({name:name,price:price,quantity:1});
        } else if($scope.cart.items[i].name == name) {
          $scope.cart.items[i].quantity++;
          added = true;
        } 
      }
    }

        
  };
    
}]);