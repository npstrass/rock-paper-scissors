const rules = document.querySelector("#rules");
const closeBtn = document.querySelector("#close");
const modal = document.querySelector(".modal-screen");

const score = document.querySelector("#score");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const triangle = document.querySelector(".triangle");

rules.addEventListener("click", () => {
  modal.classList.remove("display-none");
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("display-none");
});










let computerChoice = Math.floor(Math.random() * 3) + 1;
if (computerChoice === 1) {
  computerChoice = "rock";
} else if (computerChoice === 2) {
  computerChoice = "paper";
} else if (computerChoice === 3) {
  computerChoice = "scissors";
}

console.log(computerChoice)

rock.addEventListener("click", () => {
  userChoice = 'rock';
});

paper.addEventListener("click", () => {
  userChoice = 'paper';
});

scissors.addEventListener("click", () => {
  userChoice = 'scissors';
});
