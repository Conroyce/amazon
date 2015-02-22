app.factory('Star',['$resource','Item',function($resource,Item) {
  return $resource(
    "/items/:item_id/stars/:id",
    {item_id: "@item_id", id: "@id"},
    {update: {method:"PATCH"}}
  );
}]);