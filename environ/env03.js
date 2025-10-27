
// declaring an array with name myenvironment
let myenvironment = ["spiders", "dolls", "house"];

// declaring an object with name mydollenvironment
let mydollenvironment = {
    spiders: "black widow",
    dolls: "family of five",
    house: "200 years old"
};

let megaSentence;

megaSentence = "<p>My environmet consists of: "   + myenvironment[0] + ", " 
    + myenvironment[1] + ", " 
    + myenvironment[2] + "</p>";

megaSentence = megaSentence + "<p>My doll house posses such characteristics: spider type - " + mydollenvironment.spiders  + ", about the dolls - " + mydollenvironment.dolls +  ", house age - " + mydollenvironment.house + "</p>"
$("#output").html(megaSentence);


$("#friends-button").click(function() {

  $("body").append("<img src='/art101/images/spider.png'>");
});

let menuCount = 0;

$("#menu-button").click(function() {
  menuCount++;

  let menuText = "";
  let imageSrc = "";

  if (menuCount === 1) {
    menuText = "Breakfast!! Please enjoy pan-fried flies with a side of plastic oatmeal.";
    imageSrc = "/art101/images/fly.png";
  } else if (menuCount === 2) {
    menuText = "Lunch!! Try our web wrapped lady bug with a side of house dust!";
    imageSrc = "/art101/images/ladybug.png";
  } else if (menuCount === 3) {
    menuText = "Dinner!! Freshly microwaved pizza slices.";
    imageSrc = "/art101/images/pizza.png";
  } else if (menuCount === 4) {
    menuText = "Dessert!! Chocolate covered fleas.";
    imageSrc = "/art101/images/dessert.png";
    menuCount = 0; // reset so it loops
  }

  // Show the text
  $("#menu-text").text(menuText);

  // Update and show the image (fade effect)
  $("#menu-image").attr("src", imageSrc).fadeIn(200);
});