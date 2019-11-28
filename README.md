# serialControl

Node.JS 서버 환경에서 Arduino를 제어해보는 프로젝트

  /get/temp
    : db에서 temp 쿼리 후 JSONArray 파싱. 이후 JSONObject 값 추출 후 평균값을 계산해 로그를 남김
  
  /led
    : 현재 보드의 LED가 연결된 핀(현재는 13번) HIGH
    
  /off
    : 현재 보드의 LED가 연결된 핀 LOW
  
  /info
    : 온도센서(LM35)가 연결된 A0에서 온도값을 추출해내도록 보드에 요청, 이후 추출한 온도값은 db에 INSERT 쿼리함
