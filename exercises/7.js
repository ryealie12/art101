$(document).ready(function () {
  $(".nice-block span").click(function () {
    $(this).parent().toggleClass("more");

    if ($(this).html() === "more") {
      $(this).html("less");

      // If this is the LAST .nice-block, show the image
      if ($(this).parent().is(".nice-block:last")) {
        $("#surprise-img")
          .css({
            top: $(this).offset().top + 50 + "px",
            left: $(this).offset().left + 200 + "px",
            display: "block",
            transform: "scale(1.2)",
            opacity: 1
          });
      }
    } else {
      $(this).html("more");

      // Hide image if collapsing last .nice-block
      if ($(this).parent().is(".nice-block:last")) {
        $("#surprise-img").fadeOut(200);
      }
    }
  });
});
