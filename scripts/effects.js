//Creating an IIFE

(function(window) {
  'use strict';

  //Import App
  var App = window.App || {};

  //Import jQuery
  var $ = window.jQuery;

  //Changes the Caffeine Rating color when sliding
  $("#strengthLevel").on("input", function() {

    var inputClass = $(".strengthLevel");
    var inputValue = $(this).val();

    console.log( inputValue );
    inputClass.html( inputValue );

    if ( inputValue < 30 ) {
      inputClass.css("color", "#20CA30");
    } else if ( inputValue < 60 ) {
      inputClass.css("color", "#D9E613");
    } else if ( inputValue <= 100 ) {
      inputClass.css("color", "#E40E0E");
    }
  });

  //Handles the form submisson off godzilla100
  function HandleAlert(data) {
    console.log("handle alert", data);
    if ( data.sure === "yes" ) {
      $(".alert").slideUp(1000);
      setTimeout(function() {
        $("#firstAlert").hide();
        $("#secondAlert").css("display", "block");
        $(".alert").slideDown(1000);
      }, 1000);
    }

  }


  //Handles the form submission of super powers
  function HandlePowers(data) {
    $(".alert").slideUp(1000);
    setTimeout(function() {
      $("#secondAlert").hide();
      $("#thanks").css("display", "block");

      if ( data.powers === "timetravel" ) {
        $("#givenpower").html("time travel");
      } else if ( data.powers === "mindreading" ) {
        $("#givenpower").html("mind reading");
      } else if ( data.powers === "bugfree" ) {
        $("#givenpower").html("bug-free code");
      }

      $(".alert").slideDown(1000);
      setTimeout(function() {
        $(".alert").slideUp(1000);

        setTimeout(function() {
          $("#thanks").hide();
          $("#firstAlert").show();
        }, 2000);

      }, 2000);
    }, 1000);

  }

  App.HandlePowers = HandlePowers;
  App.HandleAlert = HandleAlert;

  window.App = App;

})(window);
