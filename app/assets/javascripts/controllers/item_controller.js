app.controller("ItemsCtrl",["$scope", "Item","Cart",function($scope, Item, Cart) { //$resource

  // var Item = $resource('/items/:id',{id: "@id"}, {update: {method: "PATCH"}});
  
  $scope.items = Item.items; 

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

  $scope.addToCart = function(item) {
    var price = item.price;
    var name = item.name;
    var id = item.id;
    Cart.total += price;
    lowerQuantity(name);
    var added = false;
    if (Cart.items.length < 1) {
      Cart.items.push({name:name,price:price,quantity:1,id:id});
    } else {  
      var len = Cart.items.length;
      for (var i = 0; i <= len; i++) {
        if(i === len && added === false) {
          Cart.items.push({name:name,price:price,quantity:1,id:id});
        } else if($scope.items[i].name == name) {
          Cart.items[i].quantity++;
          added = true;
        } 
      }
    }        
  };

  

}]);  