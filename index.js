let humanScore = 0;
let computerScore = 0;
const winningScore = 5;

function getComputerChoice() {
  const randomString = Math.floor(Math.random() * 3);
  if (randomString === 0) {
    return "Rock";
  } else if (randomString === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  let resultMessage = "";

  if (humanChoice === computerChoice) {
    resultMessage = `It's a tie! You both chose ${humanChoice}`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    resultMessage = `You win! ${
      humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
    } beats ${computerChoice}`;
  } else {
    computerScore++;
    resultMessage = `You lose! ${
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    } beats ${humanChoice}`;
  }

  updateResults(resultMessage);
  checkForWinner();
}

function updateResults(resultMessage) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = `
    <p>${resultMessage}</p>
    <p>Current Score -> You: ${humanScore}, Computer: ${computerScore}</p>
  `;
}

function checkForWinner() {
  if (humanScore === winningScore || computerScore === winningScore) {
    declareWinner();
  }
}

function declareWinner() {
  const resultsDiv = document.getElementById("results");

  if (humanScore === winningScore) {
    resultsDiv.innerHTML = `
      <p>Congratulations! You won the game with 5 points!</p>
      <p>Final Score -> You: ${humanScore}, Computer: ${computerScore}</p>
    `;
  } else if (computerScore === winningScore) {
    resultsDiv.innerHTML = `
      <p>Sorry! The computer won the game with 5 points!</p>
      <p>Final Score -> You: ${humanScore}, Computer: ${computerScore}</p>
    `;
  }

  disableButtons();
}

function disableButtons() {
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
}

function addEventListeners() {
  document.getElementById("rock").addEventListener("click", function () {
    const computerChoice = getComputerChoice();
    playRound("rock", computerChoice);
  });

  document.getElementById("paper").addEventListener("click", function () {
    const computerChoice = getComputerChoice();
    playRound("paper", computerChoice);
  });

  document.getElementById("scissors").addEventListener("click", function () {
    const computerChoice = getComputerChoice();
    playRound("scissors", computerChoice);
  });
}

document.addEventListener("DOMContentLoaded", addEventListeners);
