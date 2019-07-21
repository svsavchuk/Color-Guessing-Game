
var finished = false;
var userColor;
var targetColor
var guesses = 0;
var colors = ["gray", "magenta", "green", "cyan", "purple"];
var targetIndex;

function playGame() {

  function refreshPage() {
    document.location.reload(true)
  }

  targetIndex = Math.floor(Math.random() * colors.length)
  targetColor = colors[targetIndex];

  while (!finished) {
    userColor = prompt ("I am thinking of one of these colors:\n\n"+colors.sort().join(", ")+" "+"\n\nWhat color am I thinking of?");
    guesses += 1;
    finished = checkGuess ();
    }

  function checkGuess () {
    if (userColor === targetColor) {
      document.body.style.backgroundColor = userColor;
      alert ("You are right! The color was "+targetColor+".\n\nYou took "+guesses+" guesses.");
      return true;
    } else if (colors.includes(userColor)) {
        if (userColor > targetColor) {
          alert ("Your color is alphabetically higher than mine");
        } else {
          alert ("Your color is alphabetically lower than mine");
        }
    }  else {
        alert ("I don’t recognize that color!");
    }
  }
}
