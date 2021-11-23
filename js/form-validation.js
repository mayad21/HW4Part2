/*
    File: form-validation.js
    GUI Assignment: Validation Plugin
    This file checks to see if the user input is valid with JQuery, and then calls generate multiplication table based on user input.
    Mustapha Ayad, UMass Lowell Computer Science, mustapha_ayad@student.uml.edu
    Copyright (c) 2021 by Mustapha. All rights reserved. May be freely copied or excerpted for educational purposes with credit to the author. updated by MA on November 22nd, 2021 at 3:32 PM -->
*/
//https://www.sitepoint.com/basic-jquery-form-validation-tutorial/. 
// Wait for the DOM to be ready
var tabIndex = 1;
$(function() {


    //https://jqueryui.com/slider/
        $("#minHorizSlider").slider({
            min: -50,
            max: 50,
            slide: function(event, ui) {
                $("#minHoriz").val(ui.value);
                $("#tableForm").submit();
            }
        });
        $("#minHoriz").on("keyup", function() {
            $("#minHorizSlider").slider("value", this.value);
            $("#tableForm").submit();  
          });
        $("#maxHorizSlider").slider({
            min: -50,
            max: 50,
            slide: function(event, ui) {
                $("#maxHoriz").val(ui.value);
                $("#tableForm").submit();
            }
        });
        $("#maxHoriz").on("keyup", function() {
            $("#maxHorizSlider").slider("value", this.value);
            $("#tableForm").submit();  
          });
        $("#minVertSlider").slider({
            min: -50,
            max: 50,
            slide: function(event, ui) {
                $("#minVert").val(ui.value);
                $("#tableForm").submit();
            }
        });
        $("#minVert").on("keyup", function() {
            $("#minVertSlider").slider("value", this.value);
            $("#tableForm").submit();  
          });
        $("#maxVertSlider").slider({
            min: -50,
            max: 50,
            slide: function(event, ui) {
                $("#maxVert").val(ui.value);
                $("#tableForm").submit();
            }
        });
        $("#maxVert").on("keyup", function() {
            $("#maxVertSlider").slider("value", this.value);
            $("#tableForm").submit();  
          });

          
          
        

    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='tableForm']").validate({
        // Specify validation rules
        rules: {
            // The key name on the left side is the name attribute
            // of an input field. Validation rules are defined
            // on the right side
            minHoriz: {
                required: true,
                number: true,
                min: -50,
                max: 50
            },
            maxHoriz: {
                required: true,
                number: true,
                min: -50,
                max: 50
            },
            minVert: {
                required: true,
                number: true,
                min: -50,
                max: 50
            },
            maxVert: {
                required: true,
                number: true,
                min: -50,
                max: 50
            },
        },
        // Specify validation error messages
        messages: {
            minHoriz: {
                required: "Please enter a minimum Horizontal number between -50 and 50.",
                number: "Please enter a valid number for the minimum Horizontal value.",
                min: "The number entered is too small. Please enter a number between -50 and 50 for the minimum Horizontal value.",
                max: "The number entered is too large. Please enter a number between -50 and 50 for the minimum Horizontal value."
            },
            maxHoriz: {
                required: "Please enter a maximum Horizontal number between -50 and 50.",
                number: "Please enter a valid number for the maximum Horizontal value.",
                min: "The number entered is too small. Please enter a number between -50 and 50 for the maximum Horizontal value.",
                max: "The number entered is too large. Please enter a number between -50 and 50 for the maximum Horizontal value."
            },
            minVert: {
                required: "Please enter a minimum Vertical number between -50 and 50.",
                number: "Please enter a valid number for the minimum Vertical value.",
                min: "The number entered is too small. Please enter a number between -50 and 50 for the minimum Vertical value.",
                max: "The number entered is too large. Please enter a number between -50 and 50 for the minimum Vertical value."
            },
            maxVert: {
                required: "Please enter a maximum Vertical number between -50 and 50.",
                number: "Please enter a valid number for the maximum Vertical value.",
                min: "The number entered is too small. Please enter a number between -50 and 50 for the maximum Vertical value.",
                max: "The number entered is too large. Please enter a number between -50 and 50 for the maximum Vertical value."
            },

        },

        // generates the mult table only when input is valid
        submitHandler: function() {
            generate_mult_table();
            return false;
        },

        // if user tries to submit an invalid 
        invalidHandler: function() {
            $("#mult_table").empty();
        },
        // submits the form automatically
        onkeyup: function( element, event ) {
            submitForm();
          }
    });
});