void setup() {

  Serial.begin(9600); 
  
  pinMode(LED_BUILTIN, OUTPUT);

  digitalWrite(LED_BUILTIN, LOW);
}

void loop() {

   if(Serial.available() > 0) // 시리얼 값이 존재하는지 확인
    {
      char ReaderFromNode; // 시리얼 값을 받을 변수 선언(현재는 문자형)
      ReaderFromNode = (char) Serial.read();
      convertState(ReaderFromNode); //convertState 함수에 매개변수 전달
    }
  delay(1000); //1초간격 텀
}

void convertState(char chr) {
  
  switch(chr){
    case 'o'://PIN HIGH
    digitalWrite(LED_BUILTIN, HIGH);
    delay(100); 
    break;
    
    case 'f'://PIN LOW
    digitalWrite(LED_BUILTIN, LOW);
    delay(100); 
    break;
    
    case 'i'://PIN INFO
    Serial.print(digitalRead(LED_BUILTIN));
    delay(100);
    break;
  }
}
