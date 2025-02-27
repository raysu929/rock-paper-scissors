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

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`It's a tie! You both chose ${humanChoice}`);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(
      `You win! ${
        humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
      } beats ${computerChoice}`
    );
  } else {
    computerScore++; 
    console.log(
      `You lose! ${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
      } beats ${humanChoice}`
    );
  }
  console.log(
    `Current Score -> You: ${humanScore}, Computer: ${computerScore}`
  );
}

function playGame() {

  for (let i = 0; i < 5; i++) {
    console.log(`Round ${i + 1}:`);

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  console.log(`Final Score -> You: ${humanScore}, Computer: ${computerScore}`);
}

playGame();