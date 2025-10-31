var count = 0;
let itemCount = 0;
var items = ["fly", "dessert", "house", "ladybug"];

function makeImage(name) {
  // go up one level from exercises/ to art101/, then into images/
  $("body").append("<img width='80' src='../images/" + name + ".png'>");
}

function changeBackground() {
  const colors = ["Orchid", "Coral", "HotPink", "Plum", "LightSkyBlue", "PeachPuff"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  $("body").css("background-color", randomColor);
}

$(".image-button").click(function () {
  makeImage(this.id);
  changeBackground();
});

$("#needy-button").click(function () {
  let mood;
  if (count < 5) mood = "fresh and happy";
  else if (count < 10) mood = "keep pushing";
  else mood = "so tired";

  $("#needy-button").html(
    "Clicks: " + count + " | Image: " + items[itemCount] + " | Mood: " + mood
  );

  makeImage(items[itemCount]);
  changeBackground();

  count++;
  itemCount++;
  if (itemCount === items.length) itemCount = 0;
});
