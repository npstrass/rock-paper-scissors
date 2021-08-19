const score = document.querySelector("#score");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const triangle = document.querySelector(".triangle");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

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

const compChoice = getCompChoice();
console.log(compChoice);

//
//
//
//
//

rock.addEventListener("click", () => {
  userChoice = "rock";
});

paper.addEventListener("click", () => {
  userChoice = "paper";
});

scissors.addEventListener("click", () => {
  userChoice = "scissors";
});