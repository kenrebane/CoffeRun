
/***********************************************************
**     Receives the window object for function body.      **
**  Retrieves constructors DataStore(datastore.js) and    **
**               Truck(truck.js).                         **
***********************************************************/

(function(window) {
  'use strict';

  var FORM_SELECTOR = "[data-coffe-order='form']";
  var App = window.App;

  //Assigning constructors to local variables
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;

  //Creating instances of constructors
  var myTruck = new Truck( "Super Coffe Truck", new DataStore() );
  window.myTruck = myTruck;
  var formHandler = new FormHandler(FORM_SELECTOR);

  //Calling formHandler on pageload
  formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
  console.log(formHandler);

})(window);
