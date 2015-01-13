app.factory('Order',['$resource',function($resource) {
  return $resource(
    "/orders/:id",
    {id: "@id"},
    {update: {method: "PATCH"}}
  );
}]);