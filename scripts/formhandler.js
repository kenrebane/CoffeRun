
//Reusable form handling module using jQuery 2.1.4
(function(window) {
  'use strict';

  //Import App
  var App = window.App || {};

  //Import jQuery
  var $ = window.jQuery;

  //Constructor function
  function FormHandler(selector) {

  if ( !selector ) {
    throw new Error("No selector provided");
  }

  //Assigning selector to this instances variable
  this.$formElement = $(selector);

  //Making sure that the length of $formElement is not 0
  if ( this.$formElement.length === 0 ) {
    throw new Error("Could not find element with selector: " + selector);
  }

  }

  //Formhandler method for adding submit listener, can use any callback function
  FormHandler.prototype.addSubmitHandler = function(fn) {
    //console.log("setting submit handler for form");
    this.$formElement.on("submit", function(event) {

      //Cancel form submittion
      event.preventDefault();

      //Assign all of the values to one data object and pass it to callback
      var data = {};
      $(this).serializeArray().forEach(function(item) {
        data[item.name] = item.value;
        console.log(item.name + " is " + item.value);
      });
      console.log(data);
      if ( data.size === "godzilla" && data.strength === "100") {
        $(".alert").css("display", "block")
          .hide()
            .slideDown(1000);
      }
      fn(data);
      this.reset();
      $(".strengthLevel").html("0");
      $(".strengthLevel").css("color", "");
      this.elements[0].focus();
    });
  };


  //Assigning Formhandler to App object
  App.FormHandler = FormHandler;

  //Reassign the global App property
  window.App = App;

})(window);
