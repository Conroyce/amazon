var app = angular.module("AmazonApp",["ngResource"]);

app.controller("MainCtrl",["$scope", "$resource",function($scope, $resource) {

  var Item = $resource('/items/:id',{id: "@id"}, {update: {method: "PATCH"}});


  // var PlaceOrder = $resource("/items/:id",)

  Item.query(function(items) { console.log(items); });
  
  $scope.items = Item.query(); 

  // $scope.items = Item.get({id: 5});

  // $score.clickButton = function() {
  //   $scope.quantity++;
  //   $scope.item.$delete();
  //   //$score.item.id var Item code looks for the id and sends delete request to "/items/5" or whatever id.
  // };


  $scope.cart = {items:[],total:0};
  $scope.name = "";

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

  var updateQuantity = function(newQuantity, id) {
    console.log(newQuantity+" "+id);
    var updatedItem = Item.get({id:id}, function(item) {
      item.quantity -= newQuantity;
      item.$update();
      console.log(item);
    });
    // console.log(updatedItem);
  } 

  $scope.placeOrder = function() {
    $scope.cart.name = $scope.name;
    $scope.cart.items.forEach(function(item) {
      console.log(item)
      updateQuantity(item.quantity,item.id)
    });
    
  };

  $scope.addToCart = function(item) {
    var price = item.price;
    var name = item.name;
    var id = item.id;
    $scope.cart.total += price;
    lowerQuantity(name);
    var added = false;
    if ($scope.cart.items.length < 1) {
      $scope.cart.items.push({name:name,price:price,quantity:1,id:id});
    } else {  
      var len = $scope.cart.items.length;
      for (var i = 0; i <= len; i++) {
        if(i === len && added === false) {
          $scope.cart.items.push({name:name,price:price,quantity:1,id:id});
        } else if($scope.cart.items[i].name == name) {
          $scope.cart.items[i].quantity++;
          added = true;
        } 
      }
    }        
  };

  var increaseQuantity = function(name, quantity) {
    $scope.items.forEach(function(item) {
      if (item.name === name) {
        item.quantity += quantity;
      }
    });
  };

  $scope.removeFromCart = function(name,price) {
     var price = 0;
    
    var subtracted = false;
    for (var i = 0; i < $scope.cart.items.length; i++) {
      if($scope.cart.items[i].name === name) {
        var res = $scope.cart.items.splice(i,1);
        increaseQuantity(name,res[0].quantity);
        price = res[0].quantity * res[0].price;
      }
    }

    $scope.cart.total -= price
  };
    
}]);