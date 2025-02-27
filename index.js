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
