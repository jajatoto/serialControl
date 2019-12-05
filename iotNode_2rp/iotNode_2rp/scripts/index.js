$(function () {
    $("#btnInfo").click(function () {

        $.get("http://127.0.0.1:3000/get/temp", function (json) {
            $("#pTemp").text(JSON.stringify(json));
        })

    });
});