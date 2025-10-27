
let count = 0;
let colorcount = 0;
let colors = ["orchid", "coral", "hotpink", "plum"]; // new line tp add

// add a button titled click me

$("#needy-button").click( function(){

    if (count <5) {mood=" fresh and happy";} 
    else if ( (count>=5)&& (count<10)) {mood=" keep pushing";}
    else {mood = " so tired" ;}


  

   $("#needy-button").html ("clicks:" + count + " colors:" + colors[colorcount] + "" +mood);

    $("body").css("background-color", colors[colorcount]);

    $("body").append("<img src= 'images/orchid.png'>");

    if (colors[colorcount]== "orchid" )

    count = count + 1;
    colorcount = colorcount + 1;


    if (count == 4) { colorcount=0; } // new line
   

});



