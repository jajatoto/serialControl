var express = require("express");
var app = express();
var SerialPort = require("serialport");

var port = 3000;

var arduinoCOMPort = "COM5";

var arduinoSerialPort = new SerialPort(arduinoCOMPort, {
    baudRate: 9600
});


app.get('/', function (req, res) {

    return res.send('작동중입니다.');

})

app.get('/:action', function (req, res) {

    var action = req.params.action || req.param('action');

    if (action == "led") {
        arduinoSerialPort.write("o");
        return res.send("내장 LED 핀 HIGH 상태");
    }
    if (action == "off") {
        arduinoSerialPort.write("f");
        return res.send("내장 LED 핀 LOW 상태");
    }
    if (action == "info") {

        arduinoSerialPort.write("i");

        arduinoSerialPort.on('data', function (data) {
            console.log("현재 온도: " + parseFloat(data));
        });

        return res.send("Complete.");
    }

    return res.send("Action: " + action);

});

app.listen(port, function () {
    console.log("http://0.0.0.0:" + port + " Server On.");
});