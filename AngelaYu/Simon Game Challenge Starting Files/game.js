var COLOURS = ["green", "red", "yellow", "blue"];

function nextSequence() {
  var rand = Math.floor(Math.random() * 4);
  return rand;
}

var randomColour = COLOURS[nextSequence()];

var gameSequence = [];

gameSequence.push(randomColour);
$("#"+randomColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);


var userSequence = [];
$("button").on("click", function(){
  $("#"+$(this).attr('id')).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  userSequence.push($(this).attr('id'));
  var audio = new Audio('sounds/'+$(this).attr('id')+'.mp3');
  audio.play();
});