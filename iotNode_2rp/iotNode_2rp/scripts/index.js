$(function () {

    function getTemp() {
        $.get("http://127.0.0.1:3000/get/temp", function (json) {

            $("#pTemp").text(JSON.stringify(json));
            $("#pTemp").fadeOut(100).fadeIn(200);
        })
    }

    function query() {
        $.get("http://127.0.0.1:3000/info", function (data) {
            $("#pQuery").text(data);
            $("#pQuery").fadeOut(100).fadeIn(200);
        });
    }


    $("#btnQuery").click(function () {
        query();
    });

    $("#btnInfo").click(function () {
        getTemp();
    });

    $("#btnAvg").click(function () {
        $.get("http://127.0.0.1:3000/get/avg", function (data) {
            $("#pAvg").text(data + "℃");
            $("#pAvg").fadeOut(100).fadeIn(200);
        });
    });

    $("#btnDel").click(function () {
        if (confirm("정말로 삭제하시겠습니까?")) {

            $.get("http://127.0.0.1:3000/del");
            getTemp();
            $("#pAvg").text("");

        }
        else {
            alert("취소하였습니다.");
        }
    });
});