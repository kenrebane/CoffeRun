//IIFE for namespaces
(function(window){
  'use strict';

  var App = window.App || {};

  /*
  
    Data store constructor for storing order info
    create a new object var asd = new App.DataStore();
    add data to it asd.add("asd@asd.com", "espresso");
    same with get, getAll and remove;

  */
  function DataStore() {
    this.data = {};
  }

  DataStore.prototype.add = function(key, val) {
    this.data[key] = val;
  }

  DataStore.prototype.get = function(key) {
    return this.data[key];
  }

  DataStore.prototype.getAll = function() {
    return this.data;
  }

  DataStore.prototype.remove = function(key) {
    delete this.data[key];
  }

  App.DataStore = DataStore;
  window.App = App;
})(window);
