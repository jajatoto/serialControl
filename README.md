# serialControl-PWA

>Node.JS 서버 환경에서 Arduino를 제어해보는 프로젝트


## Uri Routing

  /get/avg
    : 파싱한 JSON들의 평균값 계산 

  /get/temp
    : db에서 temp 쿼리 후 JSONArray 파싱. 이후 평균값을 저장해놓은 후 JSONArray를 response함
  
  /led
    : 현재 보드의 LED가 연결된 핀(현재는 13번) HIGH 상태가 되도록 보드에 요청함
    
  /off
    : 현재 보드의 LED가 연결된 핀 LOW 상태가 되도록 보드에 요청함
  
  /info
    : 온도센서(LM35)가 연결된 A0에서 온도값을 추출해내도록 보드에 요청, 이후 추출한 온도값은 db에 INSERT 쿼리함


## Used Modules

- [Express](https://expressjs.com/)
- [SerialPort](https://serialport.io/)
