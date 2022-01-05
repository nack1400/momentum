'use strict'

const clock = document.querySelector("h2#clock");

function getClock(){
  const date = new Date();
  let hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  let noon;
  if(hours > 12){
    hours = hours - 12;
    noon = "오후";
  }else{
    noon = "오전";
  }

  clock.innerText = `${noon} ${hours}:${minutes}:${seconds}`;
}

//setInterval(sayHello, 5000); //5초 주기로 계속 실행
//setTimeout(sayHello, 5000); //5초 뒤에 한번만
getClock(); //1초 기다리지 않고 먼저 한번 실행
setInterval(getClock, 1000); 