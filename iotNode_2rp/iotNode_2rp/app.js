var express = require("express");
var app = express();
var SerialPort = require("serialport");

var port = 3000;
var arduinoCOMPort = "COM5";

var { Client } = require("pg");

var client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'currentTemperaturesAvg',
    password: 'noriter1q2w3e4r!@',
    port: 5432,
});

client.connect();
var arduinoSerialPort = new SerialPort(arduinoCOMPort, {
    baudRate: 9600,
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
        var buffer = ' ';
        arduinoSerialPort.on('data', function (dataChunk) {

            buffer += dataChunk;
            var data = buffer.split(/\r?\n/);
            console.log("현재 온도: 섭씨 " + parseFloat(data[0]) + "도 이며, 데이터베이스에 저장합니다.");
            client.query('INSERT INTO temp(temperature) VALUES(' + data[0] + ')', function (err, res) {
                if (err) {
                    console.log("실패하였습니다.");
                }
                else {
                    console.log("성공적으로 쿼리를 보냈습니다.");
                }
            })
        });
        return res.send("데이터 수집 완료");
    }
    return res.send("Action: " + action);

});
app.listen(port, function () {
    console.log("http://0.0.0.0:" + port + " Server On.");
});

