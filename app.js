'use strict'

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event){
  event.preventDefault(); //브라우저의 기본동작을 막는, 에를 들어) 새로고침을 막는 api
  console.log(event);
}

function handleLinkClick(event){
  event.preventDefault();
  console.dir(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);