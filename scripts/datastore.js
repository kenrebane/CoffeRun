(function(window){
  'use strict';

  var App = window.App || {};
  var hidden = 0;

  /*
    Data store constructor for storing order info as objects
  */
  function DataStore() {
    this.data = {};
  }

  /*
    .add method takes key(email) and value(coffe type):
     -assigns value to key inside constructors object
  */
  DataStore.prototype.add = function(key, val) {
    hidden++;
    this.data[key] = val;
  }

  /*
    .get method takes key(email) and
    returns corresponding value(coffe type)
  */
  DataStore.prototype.get = function(key) {
    return this.data[key];
  }

  /*
    .getAll method returns the whole DataStores object
  */
  DataStore.prototype.getAll = function() {
    return this.data;
  }

  /*
    .remove method takes key(email) and
    deletes the corresponding instance from DataStore object
  */
  DataStore.prototype.remove = function(key) {
    delete this.data[key];
  }

  App.DataStore = DataStore;
  window.App = App;
})(window);
