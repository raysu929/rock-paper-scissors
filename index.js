function getComputerChoice() {
const randomString = Math.floor(Math.random() * 3);
if (randomString === 0 ) {
    return "Rock";
} else if (randomString === 1) {
return "Paper";
} else {
    return "Scissors";
}
}

function getHumanChoice() {
  let user = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
  if (user === "rock" || user === "paper" || user === "scissors") {
    return user;
  } else {
    alert("Invalid choice. Please choose Rock, Paper or Scissors.");
    return getHumanChoice();
  }
}

let humanChoice = getHumanChoice();
console.log("Your choice: " + humanChoice);

let humanScore = 0;
let computerScore = 0;