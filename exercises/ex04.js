
let totalNumber = 0;


// add a button titled click me

$("#needy-button").click( function(){
    totalNumber = totalNumber + 3;
    let sentance ="i was clicked ";
    let sentancetwo = " times";
    let totalNumbers= sentance+totalNumber +sentancetwo;

   $("#needy-button").html(totalNumbers);

});


//when it is clicked 
//add one to the total number

// show the total number
//on our button
//show "clicked total number times"


//a top limit