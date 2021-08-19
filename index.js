const gameContainer = document.getElementById("gameContainer");
const playContainer = document.getElementById("playContainer");
const score = document.getElementById("score");
const userChoice = document.getElementById("userChoice");
const compChoice = document.getElementById("compChoice");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

function getCompChoice() {
  let compSelect = Math.floor(Math.random() * 3) + 1;

  if (compSelect === 1) {
    compSelect = "rock";
    compChoice.classList.add("rock");
  } else if (compSelect === 2) {
    compSelect = "paper";
    compChoice.classList.add("paper");
  } else if (compSelect === 3) {
    compSelect = "scissors";
    compChoice.classList.add("scissors");
  }
}

rock.addEventListener("click", () => {
  userSelect = "rock";
  runGame("rock");
});

paper.addEventListener("click", () => {
  userSelect = "paper";
  runGame("paper");
});

scissors.addEventListener("click", () => {
  userSelect = "scissors";
  runGame("scissors");
});

function runGame(pick) {
  gameContainer.classList.add("disNone");
  playContainer.classList.remove("disNone");
  userChoice.classList.add(`${pick}`);
  getCompChoice();
}
