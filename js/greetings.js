'use strict'

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const todo = document.querySelector("#todo");
const logout = document.querySelector("#logout");

// const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
  event.preventDefault(); //브라우저의 기본동작을 막는, 에를 들어) 새로고침을 막는 api
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  greeting.innerText = `안녕하세요! ${username} 님`;
  todo.classList.remove(HIDDEN_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  logout.classList.remove(HIDDEN_CLASSNAME);
}

function onLogout(){
  localStorage.removeItem(USERNAME_KEY);
  localStorage.removeItem("todos");
  window.location.reload();
}
// function handleLinkClick(event){
//   event.preventDefault();
//   console.dir(event);
// }

loginForm.addEventListener("submit", onLoginSubmit);
logout.addEventListener("click", onLogout);
// link.addEventListener("click", handleLinkClick);

function paintGreetings(username){
  greeting.innerText = `안녕하세요! ${username}님`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  logout.classList.add(HIDDEN_CLASSNAME);
  todo.classList.add(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
}else{
  paintGreetings(savedUsername);
}