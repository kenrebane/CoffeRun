
/***********************************************************
**     Receives the window object for function body.      **
**  Retrieves constructors DataStore(datastore.js) and    **
**               Truck(truck.js).                         **
***********************************************************/

(function(window) {
  'use strict';

  var FORM_SELECTOR = "[data-coffe-order='form']";
  var SUPER_POWERS = "[data-super-powers='form']";
  var HANDLE_POWER = "[data-handle-powers='form']";
  var App = window.App;

  //Assigning constructors to local variables
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var HandleAlert = App.HandleAlert;
  var HandlePowers = App.HandlePowers;


  //Creating a instance of truck
  var myTruck = new Truck( "Super Coffe Truck", new DataStore() );

  //Exporting the instance to namespace
  window.myTruck = myTruck;

  //Creating an instance of formhandler
  var formHandler = new FormHandler(FORM_SELECTOR);
  var superPowers = new FormHandler(SUPER_POWERS);
  var handlePower = new FormHandler(HANDLE_POWER);

  //Calling formHandler on pageload
  formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
  superPowers.addSubmitHandler(HandleAlert);
  handlePower.addSubmitHandler(HandlePowers);
  //console.log(formHandler);

})(window);
