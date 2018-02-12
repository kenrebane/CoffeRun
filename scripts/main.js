
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
  var CHECKLIST_SELECTOR = "[data-coffe-order='checklist']";
  var App = window.App;

  //Assigning constructors to local variables
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var HandleAlert = App.HandleAlert;
  var HandlePowers = App.HandlePowers;
  var Checklist = App.Checklist;


  //Creating a instance of truck
  var myTruck = new Truck( "Super Coffe Truck", new DataStore() );

  //Exporting the instance to namespace
  window.myTruck = myTruck;

  //Creating an instance of formhandler
  var formHandler = new FormHandler(FORM_SELECTOR);
  var superPowers = new FormHandler(SUPER_POWERS);
  var handlePower = new FormHandler(HANDLE_POWER);
  var checkList = new Checklist(CHECKLIST_SELECTOR);

  //Calling formHandlers on pageload
  formHandler.addSubmitHandler(function(data) {
    myTruck.createOrder.call(myTruck, data);
    console.log(checkList, data);
    checkList.addRow.call(checkList, data);

  });
  checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
  superPowers.addSubmitHandler(HandleAlert);
  handlePower.addSubmitHandler(HandlePowers);
  //console.log(formHandler);

})(window);
