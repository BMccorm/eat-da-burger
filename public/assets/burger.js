// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".change-consumed").on("click", function (event) {
        var id = $(this).data("id");
        var newBurger = $(this).attr("data-newOrder");
        console.log(newBurger);

        var newBurgerState = {
            devoured: newBurger
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurgerState
        }).then(
            function () {
                console.log("changed burger to", newBurger);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newMeal = {
            burger_name: $("#ca").val().trim(),
            devoured: $("[name=devour]:checked").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newMeal
        }).then(
            function () {
                console.log("created new meal");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".delete-burger").on("click", function (event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted burger", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
