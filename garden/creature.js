$("#add-creature").click(function () {
    
    // Get all input values
    let name = $("#crName").val();
    let color = $("#crColor").val();
    let eyesNum = parseInt($("#crEyesNum").val());
    let shape = $("#crShape").val();

    // Do not add empty or too-long names
    if (name === "" || name.length > 12) return;

    // Create wrapper div
    let creatureDiv = $("<div class='creature'></div>");

    // Create the body
    let body = $("<div class='creature-body'></div>");

    // Apply shape class (shape-square, shape-circle, shape-triangle)
    body.addClass("shape-" + shape);

    // Color handling
    if (shape !== "triangle") {
        // Square and circle use background color
        body.css("background-color", color);
    } else {
        // Triangle uses border-bottom color
        body.css("border-bottom-color", color);
    }

    // ----- ADD EYES -----

    if (shape === "triangle") {
        // Eyes must go into a special positioned container
        let eyesBox = $("<div class='triangle-eyes-container'></div>");

        for (let i = 0; i < eyesNum; i++) {
            eyesBox.append($("<div class='eye'></div>"));
        }

        body.append(eyesBox);

    } else {
        // Square + circle eyes go directly inside
        for (let i = 0; i < eyesNum; i++) {
            body.append($("<div class='eye'></div>"));
        }
    }

    // Add name label
    let label = $("<div class='creature-info'></div>").text(name);

    // Build the creature
    creatureDiv.append(body);
    creatureDiv.append(label);

    // Add to list
    $("#creature-list").append(creatureDiv);

    // Clear name field
    $("#crName").val("");
});

