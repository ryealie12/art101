
let count = 0;
let colors = ["orchid", "coral", "hotpink", "plum"]; // new line tp add

// add a button titled click me

$("#needy-button").click( function(){

    let reminder= count % colors.length;
  

   $("#needy-button").html ("clicks:" + count + "colors:" + colors[count]);

    $("body").css("background-color", colors[reminder]);

    count = count + 1;

});



