/* 
  // win conditions
  user: r, opp: s
  OR user: s, opp: p
  OR user: p, opp: r

  // tie conditions
  user == opp



  // loss conditions
  other conditions failed, must be a loss

*/
var userGuess;
var computerGuess;

document.onkeyup = function(event) {
  userGuess = event.key;

  computerGuess = "r"

  // check if user wins
  if (
    (userGuess === "r" && computerGuess === "s")
    || (userGuess === "s" && computerGuess === "p")
    || (userGuess === "p" && computerGuess === "r")
  ) {
    alert('you win!');

    // tie
  } else if (userGuess === computerGuess) {
    alert('tie');

  // User didn't win and user didn't tie. Must be a loss.
  } else {
    alert('loss');
  }
}
