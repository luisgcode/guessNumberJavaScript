"use strict";

// * check value btn
const checkBtn = document.getElementById("checkBtn");
// * input value
let guessNumber = document.getElementById("guessNumber");
// * how many chances I have
let chances = 20;
// * chances HTML element
let chancesPrinted = document.getElementById("chances");
// * scorePoints
let score = 0;
// * score HTML element
let scorePrinted = document.getElementById("score");
// * message
let message = document.getElementById("message");
// * Reset game
const resetBtn = document.getElementById("resetBtn");
// * Main message
let mainHeading = document.getElementById("mainMessage");

// ^ random number generator
function randomNumberGenerator(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// ? random number
let randomNumber = randomNumberGenerator(1, 20);

checkBtn.addEventListener("click", function () {
  guessNumber = parseInt(document.getElementById("guessNumber").value);

  // ? first validation, number between 1 and 20
  if (guessNumber >= 1 && guessNumber <= 20) {
    if (guessNumber === randomNumber) {
      score++;
      message.innerHTML = ` Nice, you got (${score}) points`;
      scorePrinted.innerHTML = score;
      randomNumber = randomNumberGenerator(1, 20);
      console.log(randomNumber);
      // ? winning the game
      wintheGame();
    } else {
      chances--;
      chancesPrinted.innerHTML = chances;
      message.innerHTML = " ";
      if (chances === 2) {
        message.innerHTML = "Carefull, only two other chances and You are dead";
      } else if (guessNumber > randomNumber) {
        message.innerHTML = "Try a lower number  📉👇 😉";
      } else if (guessNumber < randomNumber) {
        message.innerHTML = "Try higher 📈🆙";
      }
      endGame();
    }
    // ? If not is between 1 and 20
  } else {
    message.innerHTML =
      "NOT A VALID number" + "<br>" + "should be between 1 and 20.";
    guessNumber = document.getElementById("guessNumber").value = "";
  }
});

// ^ End game function
const endGame = function () {
  if (chances === 0) {
    message.innerHTML = "You lost buddy 😵☠️ ";
    checkBtn.style.opacity = "50%";
    checkBtn.style.transform = "none";
    checkBtn.style.pointerEvents = "none";
    mainHeading.innerHTML = "Good game, better next time";
  }
};

// ^ Win game function
const wintheGame = function () {
  if (score === 3) {
    document.body.style.backgroundColor = "green";
    checkBtn.style.opacity = "50%";
    checkBtn.style.transform = "none";
    checkBtn.style.pointerEvents = "none";
    mainHeading.innerHTML = "You are a killer!!!";
  }
};

// ^ Reset the game function
const resetTheGame = function () {
  message.innerHTML = "Start guessing...";
  checkBtn.style.opacity = "100%";
  checkBtn.style.transform = "none";
  document.body.style.backgroundColor = "#111827";
  checkBtn.style.pointerEvents = "";
  score = 0;
  scorePrinted.innerHTML = score;
  chances = 20;
  chancesPrinted.innerHTML = chances;
  mainHeading.innerHTML = "Guess The Number!";
  guessNumber = document.getElementById("guessNumber").value = "";
};

resetBtn.addEventListener("click", function () {
  resetTheGame();
});
