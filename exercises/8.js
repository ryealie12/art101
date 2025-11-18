$(document).ready(function () {
    $("#myTextbox").on("click", function () {
        $(this).animate({
            left: "+=200px",   // move right
            top: "+=50px"      // move down
        }, 600); // speed
    });
});