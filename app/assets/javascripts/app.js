var app = angular.module("AmazonApp",[]);

app.controller("MainCtrl",["$scope",function($scope) {
  $scope.items = [
    {
      name: "Angular Book", 
      description: "Favorite book about Angular", 
      price: 10, 
      quantity: 50, 
      url: "https://www.ng-book.com/images/flatbook-ngbook-small.png"
    },{
      name: "Leather Jacket", 
      description: "Genuine leather. Not fake.", 
      price: 100, 
      quantity: 100, 
      url: "http://images.leatherup.com/images/product/large/XS-151-300-1.jpg"
    },
    {
      name: "Snuggie", 
      description: "This will literally change your life.", 
      price: 30, 
      quantity: 200, 
      url: "http://cdn01.dailycaller.com/wp-content/uploads/2013/06/wholesale-20pcs-New-Snuggie-Blanket-Robe-As-Seen-On-TV.jpg"
    }  
  ];
  $scope.cart = [];
  $scope.addToCart = function(name,price) {
    $scope.cart.push({name:name,price:price})
  };
}]);