app.controller("ItemsCtrl",["$scope", "Item",function($scope, Item) { //$resource

  // var Item = $resource('/items/:id',{id: "@id"}, {update: {method: "PATCH"}});

  // var Order = $resource('/orders');
  
  $scope.items = Item.query(); 

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
    });
  } 

  var addOrder = function(name,total) {
    var order = new Order({person:name,cost:total});
    order.$save();
  };

  $scope.placeOrder = function() {
    $scope.cart.items.forEach(function(item) {
      updateQuantity(item.quantity,item.id)
    });

    addOrder($scope.name,$scope.cart.total);
    $scope.cart.items = [];
    $scope.cart.total = 0;
    $scope.name = "";
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