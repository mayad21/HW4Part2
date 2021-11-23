/*
    File: dynTable.js
    GUI Assignment: Validation Plugin
    This file generates a multiplication table based on user input.
    Mustapha Ayad, UMass Lowell Computer Science, mustapha_ayad@student.uml.edu
    Copyright (c) 2021 by Mustapha. All rights reserved. May be freely copied or excerpted for educational purposes with credit to the author. updated by MA on November 22nd, 2021 at 3:32 PM -->
*/
//This function will check for valid input by the user. If the input is not valid, an error message will appear and the input form that was not valid will turn red to indicate it needs to be fixed. Once it has confirmed valid input, the function will take the paramters entered by the user to generate a multiplication table. This is achieved by constructing a 2D array with the multiplication values. Then, a string variable is concatenated with html tags to form a table with the first column and the first column being the range of parameters. 
function generate_mult_table() {
    // cast values entered by users into numbers to ensure proper result when doing comparisions.
    // https://www.w3schools.com/js/js_comparisons.asps
    var minHoriz = Number(document.getElementById('minHoriz').value);
    var maxHoriz = Number(document.getElementById('maxHoriz').value);
    var minVert = Number(document.getElementById('minVert').value);
    var maxVert = Number(document.getElementById('maxVert').value);
    //accessing HTML elements in order to signify an error through message or input form
    /* Error handling handled by Jquery so this error handling is commented out
    var error = document.getElementById('error');
    var minHorizError = document.getElementById('minHoriz');
    var maxHorizError = document.getElementById('maxHoriz');
    var minVertError = document.getElementById('minVert');
    var maxVertError = document.getElementById('maxVert');
    var passCheck = false;
    // checking bounds between -400 and 400 for all input forms
    if (minHoriz < -400 || maxHoriz > 400 || minVert < -400 || maxVert > 400 || minHoriz > 400 || maxHoriz < -400 || minVert > 400 || maxVert < -400) {
        //https://www.geeksforgeeks.org/how-to-display-error-without-alert-box-using-javascript/
        error.textContent = "Please enter numbers between -400 and 400.";
        error.style.color = "red";
        if (minHoriz < -400 || minHoriz > 400) {
            //signifies which input form needs to be fixed
            minHorizError.style.background = "pink";
        } else {
            //resets color if error is fixed in this form, but other forms may still have errors
            minHorizError.style.background = "white";
        }
        if (maxHoriz < -400 || maxHoriz > 400) {
            maxHorizError.style.background = "pink";
        } else {
            maxHorizError.style.background = "white";
        }
        if (minVert < -400 || minVert > 400) {
            minVertError.style.background = "pink";
        } else {
            minVertError.style.background = "white";
        }
        if (maxVert < -400 || maxVert > 400) {
            maxVertError.style.background = "pink";
        } else {
            maxVertError.style.background = "white";
        }

    } else {
        //if no errors, then all error flags are reset
        error.textContent = "";
        minHorizError.style.background = "white";
        maxHorizError.style.background = "white";
        minVertError.style.background = "white";
        maxVertError.style.background = "white";
        var passCheck = true;

    } */
    //will not generate table unless passCheck is true meaning no errors in input
    //if (passCheck) {

    //swaps min and max horizontal values if mins > maxs
    if (minHoriz > maxHoriz) {
        var temp = minHoriz;
        minHoriz = maxHoriz;
        maxHoriz = temp;
    }
    //swaps min and max vertical values if mins > maxs
    if (minVert > maxVert) {
        var temp = minVert;
        minVert = maxVert;
        maxVert = temp;
    }

    // calculate the rows and columns by taking absolute difference of mins and maxs
    var rows = Math.abs(minVert - maxVert)
    var columns = Math.abs(minHoriz - maxHoriz)

    var horiz = minHoriz;
    var vert = minVert;

    // 1D array with enough elements for the rows 
    var mult_table = new Array(rows + 1);
    //each element inside 1D array becomes an array with enough space for columns, mult_table is now 2D
    //https://stackoverflow.com/questions/966225/how-can-i-create-a-two-dimensional-array-in-javascript
    for (var i = 0; i < mult_table.length; i++) {
        mult_table[i] = new Array(columns + 1);
    }
    // iterates over rows and columns and calculates multiplication value for each cell
    for (var i = 0; i < mult_table.length; i++) {
        for (var j = 0; j < mult_table[i].length; j++) {
            mult_table[i][j] = vert * horiz;
            horiz++;
        }
        //reset horizontal value because the next row will be calculated
        horiz = minHoriz;
        vert++;
    }

    //create a string with HTML tags to create a table with bootstrap, first element in first row is blank
    var fill_table = '<table class="table table-bordered"><tr><td></td>';
    //creating the rest of the first row
    for (var head = minHoriz; head <= maxHoriz; head++) {
        fill_table += "<td>" + head + "</td>";
    }

    fill_table += "</tr>"

    for (var i = 0; i <= rows; i++) {
        //creating the first column
        fill_table += "<tr><td>" + minVert + "</td>";
        //filling the rest of the table with mult values
        for (var j = 0; j <= columns; j++) {
            fill_table += "<td>" + mult_table[i][j] + "</td>";
        }
        minVert++;

        fill_table += "</tr>";
    }

    fill_table += "</table>";
    //add the code to the HTML file to print the table
    //https://www.tutorialrepublic.com/faq/how-to-assign-block-of-html-code-to-a-javascript-variable.php
    //https://www.w3schools.com/html/html_tables.asp
    //https://getbootstrap.com/docs/4.0/content/tables/
    var final_table = document.getElementById('mult_table');
    final_table.innerHTML = fill_table;

    //}
}

function saveTable() {

    $("#tableTabs").tabs();
    //get the values for each input
    var minHoriz = Number(document.getElementById('minHoriz').value);
    var maxHoriz = Number(document.getElementById('maxHoriz').value);
    var minVert = Number(document.getElementById('minVert').value);
    var maxVert = Number(document.getElementById('maxVert').value);
    //increment tab index
    tabIndex++;

    //creates a tab with a header lisitng the paramters
    var params = "<li class='tab'><a href='#tab-" + tabIndex + "'>" + minHoriz +
        " x " + maxHoriz + " with " + minVert + " x " + maxVert + "</a>" +
        "<span class='ui-icon ui-icon-close' role='presentation'></span>" + "</li>";


    $("#tableTabs ul").append(params);

    // saves the mult table to the tab
    $("#tableTabs").append('<div id="tab-' + tabIndex + '">' + $("#mult_table").html() + '</div>');

    // new tab visible
    $("#tableTabs").tabs("refresh");

    // new tab active
    $("#tableTabs").tabs("option", "active", -1);

    // https://jqueryui.com/tabs/#manipulation
    $("#tableTabs").delegate("span.ui-icon-close", "click", function() {
        var panelID = $(this).closest("li").remove().attr("aria-controls");
        $("#" + panelID).remove();


        $("#tabs").tabs("refresh");

        // https://api.jqueryui.com/tabs/#method-destroy
        if ($('#tabs ul li.tab').length == 0) {
            try {
                $("#tabs").tabs("destroy");
            } catch (e) {}

            return false;
        }
    });
}