const images = ["1.jpg", "2.png", "3.jpg", "4.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// console.log(chosenImage);

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
// console.log(bgImage);

document.body.appendChild(bgImage);