const btn = document.querySelector("#startBtn");
const user = document.querySelector("#user");
const userGuess = document.querySelector("#userGuess");
const stageNode = document.querySelector(".stage");
const pointNode = document.querySelector(".point");

//Get username
const userInput = prompt("Enter your username");
user.innerHTML = userInput == null ? "User" : userInput;

btn.addEventListener("click", game);

// Game logic
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let min = 1;
let max = 2;
let stage = 1;
let point = 0
function game() {
  let computerGuess = getRandomInt(min, max);
  let guess = Number(userGuess.value);
  console.log({ computerGuess });
  if (guess == computerGuess) {
    alert("You win");
    point += 1
    stage += 1;
    pointNode.textContent = point
    stageNode.textContent = stage;
    max += 1;
    console.log("win");
  } else {
    alert("Try again")
    console.log("nop");
  }
}
