app.directive("itemsDirective",function() {
  return {
    scope: {
      name: '@name'
    },
    templateUrl: 'items.html'
  };
});