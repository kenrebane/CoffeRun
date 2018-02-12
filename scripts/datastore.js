//IIFE for namespaces
(function(window){
  'use strict';

  var App = window.App || {};

  //Creating a Data store constructor for storing order info
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
