$("#add-creature").click(function() {
  // Grab the value from the input
  let crName = $("#crName").val();

  // Check that the field is not empty
  if ((crName === "") || (crName.length>11)){
    // Do nothing
  } else {
    // Add the creature name to the list
    $("#creature-list").append(crName + ", ");
  }

  // Clear the input after adding
  $("#crName").val("");
});