const gameOverContainer = document.getElementById("gameOverContainer");
const gameContainer = document.getElementById("gameContainer");
const playContainer = document.getElementById("playContainer");
const userPick = document.getElementById("userChoice");
const compPick = document.getElementById("compChoice");
const playAgain = document.getElementById("playAgain");
const gameOver = document.getElementById("gameOver");
const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");
const rock = document.getElementById("rock");
const score = document.getElementById("score");
let scoreValue = 0;
score.innerText = scoreValue;

function runGame(userChoice) {
  function getRandNum() {
    return Math.floor(Math.random() * 3) + 1;
  }

  const randNum = getRandNum();

  function getCompChoice() {
    if (randNum === 1) {
      setTimeout(() => {
        compPick.classList.add("rock");
      }, 1000);
      return "rock";
    } else if (randNum === 2) {
      setTimeout(() => {
        compPick.classList.add("paper");
      }, 1000);
      return "paper";
    } else if (randNum === 3) {
      setTimeout(() => {
        compPick.classList.add("scissors");
      }, 1000);
      return "scissors";
    }
  }

  const compChoice = getCompChoice();

  if (userChoice === compChoice) {
    gameOver.innerText = "you tied";
  }

  if (userChoice === "rock") {
    userPick.classList.add("rock");
    if (compChoice === "scissors") {
      gameOver.innerText = "you win";
    } else if (compChoice === "paper") {
      gameOver.innerText = "you lose";
    }
  } else if (userChoice === "paper") {
    userPick.classList.add("paper");
    if (compChoice === "rock") {
      gameOver.innerText = "you win";
    } else if (compChoice === "scissors") {
      gameOver.innerText = "you lose";
    }
  } else if (userChoice === "scissors") {
    userPick.classList.add("scissors");
    if (compChoice === "paper") {
      gameOver.innerText = "you win";
    } else if (compChoice === "rock") {
      gameOver.innerText = "you lose";
    }
  }

  if (gameOver.innerText === "you win") {
    setTimeout(() => {
      document.getElementById("userDidWin").classList.remove("disNone");
      score.innerText = parseInt(score.innerText) + 1;
    }, 1000);
  } else if (gameOver.innerText === "you lose") {
    setTimeout(() => {
      document.getElementById("compDidWin").classList.remove("disNone");
      if (parseInt(score.innerText) > 0) {
        score.innerText = parseInt(score.innerText) - 1;
      }
    }, 1000);
  }
}

document.getElementById("rock").addEventListener("click", () => {
  playContainer.classList.remove("disNone");
  gameContainer.classList.add("disNone");
  setTimeout(() => {
    gameOverContainer.classList.remove("disNone");
  }, 1000);
  runGame("rock");
});

document.getElementById("paper").addEventListener("click", () => {
  playContainer.classList.remove("disNone");
  gameContainer.classList.add("disNone");
  setTimeout(() => {
    gameOverContainer.classList.remove("disNone");
  }, 1000);
  runGame("paper");
});

document.getElementById("scissors").addEventListener("click", () => {
  playContainer.classList.remove("disNone");
  gameContainer.classList.add("disNone");
  setTimeout(() => {
    gameOverContainer.classList.remove("disNone");
  }, 1000);
  runGame("scissors");
});

playAgain.addEventListener("click", () => {
  playContainer.classList.add("disNone");
  gameContainer.classList.remove("disNone");
  gameOverContainer.classList.add("disNone");
  document.getElementById("userDidWin").classList.add("disNone");
  document.getElementById("compDidWin").classList.add("disNone");

  userPick.className = "userChoice";
  compPick.className = "compChoice";
});
