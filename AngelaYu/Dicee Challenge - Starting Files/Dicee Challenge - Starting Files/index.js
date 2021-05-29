var rand1 = Math.floor(Math.random() * 6 + 1);
document.querySelector(".dice .img1").setAttribute("src", "images/dice"+rand1+".png");
var rand2 = Math.floor(Math.random() * 6 + 1);
document.querySelector(".dice .img2").setAttribute("src", "images/dice"+rand2+".png");

var win = "Draw;)";

if (rand1 > rand2) {
  win = "Player1 wins!";
} else if (rand2 > rand1) {
  win = "Player2 wins!";
}

document.querySelector(".container h1").innerHTML = win;