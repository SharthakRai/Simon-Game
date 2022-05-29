var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

  animatePress(userChosenColour);
});

function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);

  // increase the level by 1 every time nextSequence() is called.
    level++;

    //update h1 with the value of level
    $("#level-title").text("Level " + level);
    

}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

//1. Create a new function called animatePress(), it should take a single input parameter called currentColour.
function animatePress(currentColor) {

  //2. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
  $("#" + currentColor).addClass("pressed");

  //3. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}


// 1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
$(document).keypress(function() {
    if (!started) {
        nextSequence();
        started = true;
    }
    });

// 2. Create a new variable called level and start at level 0.
var level = 0;

// 3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
$("h1").text("Level " + level);
