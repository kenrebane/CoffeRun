/***********************************************************
**                CHECKLIST MODULE                        **
************************************************************/

(function(window) {
  'use strict';
  //Importing App namespace
  var App = window.App || {};

  //Importing jQuery
  ///asdasd

  //Appends the row item to pending orders
  function Checklist(selector) {

    //Checking if a selector is given
    if ( !selector ) {
      throw new Error("No selector");
    }

    //Making sure that there's atleast one element selected
    var $ = window.jQuery;
    this.$element = $(selector);
    if ( this.$element.length === 0 ) {
      throw new Error("Couln not find element: " + selector);
    }



  }


  //Method for adding rows to pending orders
  Checklist.prototype.addRow = function(coffeOrder) {
    this.removeRow(coffeOrder.emailAddress);
    //Creating a new row from coffeOrder object
    var rowElement = new Row(coffeOrder);
    //Add new row instance $element property to checklist
    this.$element.append(rowElement.$element);
  };

  //Creates the row item out of order data
  function Row(coffeOrder){

    var $div = $("<div></div>", {
      "data-coffe-order": "checkbox",
      'class': "checkbox"
    });

    var $label = $("<label></label>");

    var $checkbox = $("<input></input>", {
      type: "checkbox",
      value: coffeOrder.emailAddress
    });

    var description = coffeOrder.coffe + " ";
    description += coffeOrder.size + " ";
    if ( coffeOrder.flavor ) {
      description += coffeOrder.flavor + " ";
    }
    description += " [" + coffeOrder.strength + "]";
    description += " (" + coffeOrder.emailAddress + ")";


    $label.append($checkbox);
    $label.append(description);
    $div.append($label);

    this.$element = $div;
  }

  //Adds click handlers to checkboxes
  Checklist.prototype.addClickHandler = function(fn) {
    this.$element.on("click", "input", function(event) {
      var email = event.target.value;
      this.removeRow(email);
      fn(email);
    }.bind(this));
  };

  //Removes rows from pending orders by email address
  Checklist.prototype.removeRow = function(email) {
    this.$element
      .find("[value='" + email + "']")
      .closest("[data-coffe-order='checkbox']")
      .remove();
  };

  //Exporting checklist
  App.Checklist = Checklist;

  //Reassigning app
  window.App = App;
})(window);
