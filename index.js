const gameContainer = document.getElementById("gameContainer");
const playContainer = document.getElementById("playContainer");
const score = document.getElementById("score");
const userChoice = document.getElementById("userChoice");
const compChoice = document.getElementById("compChoice");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const compSelect = getCompChoice();

function getCompChoice() {
  let compChoice = Math.floor(Math.random() * 3) + 1;

  if (compChoice === 1) {
    compChoice = "rock";
  } else if (compChoice === 2) {
    compChoice = "paper";
  } else if (compChoice === 3) {
    compChoice = "scissors";
  }
  return compChoice;
}

console.log(compSelect);

rock.addEventListener("click", () => {
  userSelect = "rock";
  console.log("rock");
});

paper.addEventListener("click", () => {
  userSelect = "paper";
  console.log("paper");
});

scissors.addEventListener("click", () => {
  userSelect = "scissors";
  console.log("scissors");
});
