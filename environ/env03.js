
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

