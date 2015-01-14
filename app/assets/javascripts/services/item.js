app.factory('Item',['$resource',function($resource) {
  var Item = $resource(
    "/items/:id",
    {id: "@id"},
    {update: {method: "PATCH"}}
  );
   var items = Item.query();

   return {
    Item: Item,
    items: items
   }
}]);  