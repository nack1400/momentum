'use strict'

//alert("hi");

// const tmp = document.getElementById("title");

// //console.log(tmp);

// tmp.innerText = "변경한 제목";

// const tmp2 = document.getElementsByClassName("hello");
// console.log(tmp2);


// const tmp3 = document.querySelector(".hello h1");
// console.log(tmp3);

// const tmp4 = document.querySelectorAll(".hello h1");
// console.log(tmp4);




// const h1 = document.querySelector("div.hello h1");
// function click(){
//   console.log("클릭했습니다.");
// }
// function mouseEnter(){
//   h1.innerText = "마우스 올라옴";
// }
// function mouseLeave(){
//   h1.innerText = "마우스 나감";
// }
// function windowResize(){
//   document.body.style.backgroundColor = "tomato";
// }
// function windowCopy(){
//   alert("복사 실행!");
// }
// function windowOffline(){
//   alert("와이파이가 없습니다");
// }
// function windowOnline(){
//   alert("와이파이가 연결되었습니다");
// }

// h1.addEventListener("click", click);
// h1.addEventListener("mouseenter", mouseEnter);
// h1.addEventListener("mouseleave",mouseLeave);

// window.addEventListener("resize", windowResize);
// window.addEventListener("copy", windowCopy);
// window.addEventListener("offline",windowOffline);
// window.addEventListener("online",windowOnline);




// const h1 = document.querySelector("div.hello h1");

// function handleTitleClick(){
//   const currentColor = h1.style.color;
//   let newColor;
//   if(currentColor ==="blue"){
//     newColor = "tomato";
//   }else{
//     newColor = "blue";
//   }
//   h1.style.color = newColor;
// }

// h1.addEventListener("click", handleTitleClick);


// const h1 = document.querySelector("div.hello h1");
// function handleTitleClick(){
//   const clickedClass = "clicked";
//   if(h1.className === clickedClass){
//     h1.className = "";
//   }
//   else{
//     h1.className = clickedClass;
//   }
// }

// h1.addEventListener("click", handleTitleClick);


const h1 = document.querySelector("div.hello h1");
function handleTitleClick(){
  // const clickedClass = "clicked";
  // if(h1.classList.contains(clickedClass)){
  //   h1.classList.remove(clickedClass);
  // }
  // else{
  //   h1.classList.add(clickedClass);
  // }

  //태그안에 클래스가 있는지 확인해주고 없다면 넣어주고 있다면 빼줌
  h1.classList.toggle("clicked"); 
}

h1.addEventListener("click", handleTitleClick);
