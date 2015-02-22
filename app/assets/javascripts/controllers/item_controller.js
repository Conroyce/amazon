app.controller("ItemsCtrl",["$scope", "Item", "Cart", "Star",function($scope, Item, Cart, $location, Star) { //$resource

  // var Item = $resource('/items/:id',{id: "@id"}, {update: {method: "PATCH"}});

  $scope.items = Item.items;
  console.log(Item.items);

  // $scope.stars = Star.query({item_id:1});

  $scope.rateItem = function(num,event) {
    num = num || 0;
    for (var i = 1; i <= num; i++) {
      var star = document.querySelector(".star"+i);
      star.className += " goldStar";
    }
  };

  $scope.removeStar = function() {
    for (var i = 1; i <= 5; i++) {
      var star = document.querySelector(".star"+i);
      star.className = "star"+i;
    }
  }

  $scope.addRating = function(star,item_id) {
    var rating = new Star({rating: star,item_id: item_id});
    rating.$save();
    
  }

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
    if (Cart.items.length < 1) {
      Cart.items.push({name:name,price:price,quantity:1,id:id});
    } else {  
      var len = Cart.items.length;
      for (var i = 0; i <= len; i++) {
        if(i === len) {
          Cart.items.push({name:name,price:price,quantity:1,id:id});
        } else if(Cart.items[i].name == name) {
          Cart.items[i].quantity++;
          break;
        } 
      }
    }        
  };

  

}]);  