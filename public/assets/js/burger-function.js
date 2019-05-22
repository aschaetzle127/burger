$(function () {
    $(".changed-devoured").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");
        console.log(id);
        console.log(newDevoured);
        var newState = {
            devoured = 1
        };
        console.log(newState);
        $.ajax("/" + id, {
            type: "PUT",
            data: newState
        }).then(function () {
            console.log("changed devoured to ", newDevoured);
            location.reload();
        })
    })
});

$(".create-form").on("submit", function (event) {
    event.preventDefault();

    var newBurg = {
        burger_name: $("#ca").val().trim(),
    };
    $.ajax("/", {
        type: "POST",
        data: newBurg
    }).then(function () {
        console.log("created new burger");
        location.reload();
    })
})