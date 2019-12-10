$(function () {

    $("#btnQuery").click(function () {
        $.get("http://127.0.0.1:3000/info", function (data) {
            $("#pQuery").text(data);
        });
    });

    $("#btnInfo").click(function () {

        $.get("http://127.0.0.1:3000/get/temp", function (json) {
            $("#pTemp").text(JSON.stringify(json));
        })

    });

    $("#btnAvg").click(function () {
        $.get("http://127.0.0.1:3000/get/avg", function (data) {
            $("#pAvg").text(data + "℃");
        });
    });

});