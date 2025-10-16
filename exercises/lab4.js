// declaring an array with name myCommutes
let myCommutes = ["car", "city bike", ];

// declaring an object with name myFavouriteCommute
let myFavouriteCommute = {
    type: "car",
    route: "school to east remote",
    bike: "doc in east remote"
};


let megaSentence;

megaSentence = "<p>My two top commutes from the array are: " + myCommutes[0] + ", " + myCommutes[3] + "</p>";

megaSentence = megaSentence + "<p>My favourite commute possesses such characteristics: type - " + myFavouriteCommute.type + ", car " + myFavouriteCommute.route + ",school to east remote  " + myFavouriteCommute.bike + ", doc in east remote"+ "</p>";
$("#output").html(megaSentence);