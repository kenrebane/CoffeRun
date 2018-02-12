(function(window) {
  'use strict';

  var App = window.App || {};

  /*
    Creating a constructor function for truck:
      -that takes an id for the truck
       and creates a new db for that truck using datastore.js
  */
  function Truck (truckId, db) {
    this.truckId = truckId;
    this.db = db;
  }

  /*
    Creating a method for adding orders to the trucks
    instance db:
      -takes order as an object which has keys emailAddress
       and coffe
      -adds an instance of the order to db with the key emailAddress
       and attaches the whole order object to that key
  */
  Truck.prototype.createOrder = function(order) {
    console.log("Adding order for: " + order.emailAddress);
    this.db.add(order.emailAddress,  order);
  }

  /*
    Creating a method for removing orders from trucks db:
      -takes orders key emailAddress as customerId
       and removes the instance from trucks db using emailAddress
  */
  Truck.prototype.deliverOrder = function(customerId) {
    console.log("Delivering order for " + customerId);
    this.db.remove(customerId);
  }

  /*
    Creating a method for printing all pending orders:
      -takes orders key emailAddress as customerId
      -creates an array of all the orders by using getAll method of
       function DataStore(datastore.js)
      -binds customerIdArray with this trucks instance
      -logs every order to console by using DataStore method
       get
  */
  Truck.prototype.printOrders = function(customerId) {
    var customerIdArray = Object.keys( this.db.getAll() );

    console.log("This # " + this.truckId + " has pending orders.");
    customerIdArray.forEach( function(id) {
      console.log( this.db.get(id) );
    }.bind(this));
  }

  App.Truck = Truck;
  window.App = App;

})(window);
