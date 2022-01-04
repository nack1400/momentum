const quotes = [
  {
    quote: "12 영접하는 자 곧 그 이름을 믿는 자들에게는 하나님의 자녀가 되는 권세를 주셨으니",
    author: "요한복음 1:12",
  },
  {
    quote: "14 말씀이 육신이 되어 우리 가운데 거하시매 우리가 그의 영광을 보니 아버지의 독생자의 영광이요 은혜와 진리가 충만하더라",
    author: "요한복음 1:14",
  },
  {
    quote: "13 내게 능력 주시는 자 안에서 내가 모든 것을 할 수 있느니라",
    author: "빌립보서 4:13",
  },
  {
    quote: "6 아무 것도 염려하지 말고 다만 모든 일에 기도와 간구로, 너희 구할 것을 감사함으로 하나님께 아뢰라",
    author: "빌립보서 4:6",
  },
  {
    quote: "10 사랑은 여기 있으니 우리가 하나님을 사랑한 것이 아니요 하나님이 우리를 사랑하사 우리 죄를 속하기 위하여 화목제물로 그 아들을 보내셨음이라",
    author: "요한일서 4:10",
  },
  {
    quote: "12 영접하는 자 곧 그 이름을 믿는 자들에게는 하나님의 자녀가 되는 권세를 주셨으니",
    author: "요한복음 1:12",
  },
  {
    quote: "14 말씀이 육신이 되어 우리 가운데 거하시매 우리가 그의 영광을 보니 아버지의 독생자의 영광이요 은혜와 진리가 충만하더라",
    author: "요한복음 1:14",
  },
  {
    quote: "13 내게 능력 주시는 자 안에서 내가 모든 것을 할 수 있느니라",
    author: "빌립보서 4:13",
  },
  {
    quote: "6 아무 것도 염려하지 말고 다만 모든 일에 기도와 간구로, 너희 구할 것을 감사함으로 하나님께 아뢰라",
    author: "빌립보서 4:6",
  },
  {
    quote: "10 사랑은 여기 있으니 우리가 하나님을 사랑한 것이 아니요 하나님이 우리를 사랑하사 우리 죄를 속하기 위하여 화목제물로 그 아들을 보내셨음이라",
    author: "요한일서 4:10",
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//console.log(quotes[Math.floor(Math.random()*quotes.length)]);
//Math.floor() Math.ceil() Math.round()

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `\n${todaysQuote.author}`;