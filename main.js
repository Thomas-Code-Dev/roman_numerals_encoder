// window.onload = function () {
//   // write your code here
// };

var jump = document.getElementById("flip-flop");
var pos = 0

jump.onclick = function () {
  if (jump.innerHTML == "Go Right!") {
  jump.innerHTML = "Go Left!";
  jump.style.position = "relative";
  jump.style.left = 800 +'px';
} else {jump.innerHTML = "Go Right!";
jump.style.left = 20 +'px';
}
};




var changeColor = document.getElementById("change-color");

changeColor.onclick = function () {
  if (changeColor.style.color == "red") {
    changeColor.style.color = "black";
  } else {changeColor.style.color = "red";
  }
};




var neighbourColorChanger = document.getElementById("change-neighbour-color");
var neighbour = document.getElementById("neighbour");

function generateRandomColor() {
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

neighbourColorChanger.onclick = function () {
  neighbour.style.color = generateRandomColor();
};




var count = document.getElementById("count");

count.onclick = function () {
  count.innerHTML = (parseInt(count.innerHTML)+1).toString();
  console.log(count.innerHTML);
};