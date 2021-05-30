
function play_sound(key) {
  var audio = new Audio("sounds/tom-1.mp3");
  
  switch(key) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
    break;
    case "a":
      audio = new Audio("sounds/tom-2.mp3");
    break;
    case "s":
      audio = new Audio("sounds/tom-3.mp3");
    break;
    case "d":
      audio = new Audio("sounds/tom-4.mp3");
    break;
    case "j":
      audio = new Audio("sounds/crash.mp3");
    break;
    case "j":
      audio = new Audio("sounds/kick-bass.mp3");
    break;
    case "l":
      audio = new Audio("sounds/snare.mp3");
    break;
    default :
      console.log("wrong button " + key);
  }
  audio.play();
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
  
}

function handleClick() {
  this.style.color = "white";
  buttonAnimation(this.innerHTML);
  play_sound(this.innerHTML);
}

var x = document.querySelectorAll("button");
for (i = 0; i < x.length; ++i) {
  x[i].addEventListener("click", handleClick);
}


document.addEventListener("keypress", function(event) {
  
  buttonAnimation(event.key);
  play_sound(event.key);
  
});

