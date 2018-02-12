
/*
Receives the window object for function body.
Retrieves constructors DataStore(datastore.js) and
Truck(truck.js).
*/
(function(window) {
  'use strict';

  var App = window.App;

  //Assigning constructors to local variables
  var Truck = App.Truck;
  var DataStore = App.DataStore;

  //Creating an instance of Truck
  var myTruck = new Truck( "Super Coffe Truck", new DataStore() );

  //Exporting the instance of Truck to global namespace
  window.myTruck = myTruck;

})(window);
