const gameContainer = document.getElementById("gameContainer");
const playContainer = document.getElementById("playContainer");
const score = document.getElementById("score");
const userChoice = document.getElementById("userChoice");
const compChoice = document.getElementById("compChoice");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const gameOver = document.getElementById('gameOver')
const playAgain = document.getElementById('playAgain')

function getCompChoice() {
  let compSelect = Math.floor(Math.random() * 3) + 1;

  if (compSelect === 1) {
    compSelect = "rock";
    setTimeout(() => {
      compChoice.classList.add("rock");
    }, 1000);
  } else if (compSelect === 2) {
    compSelect = "paper";
    setTimeout(() => {
      compChoice.classList.add("paper");
    }, 1000);
  } else if (compSelect === 3) {
    compSelect = "scissors";
    setTimeout(() => {
      compChoice.classList.add("scissors");
    }, 2000);
  }
  return compSelect;
}

function runGame(pick) {
  gameContainer.classList.add("disNone");
  playContainer.classList.remove("disNone");
  userChoice.classList.add(`${pick}`);
  let x = getCompChoice();
  return x;
}

rock.addEventListener("click", () => {
  let y = runGame("rock");
  function declareWinner() {
    if (y === "rock") {
      console.log("its a tie");
    } else if (y === "paper") {
      console.log("you lost");
    } else if (y === "scissors") {
      console.log("you won");
    }
  }
  setTimeout(declareWinner, 2500);
});

paper.addEventListener("click", () => {
  runGame("paper");
});

scissors.addEventListener("click", () => {
  runGame("scissors");
});
