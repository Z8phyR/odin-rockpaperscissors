const buttons = document.querySelectorAll("button.selection");
const newGame = document.querySelector(".newgame");
const gameDisplay = document.querySelector(".result");
const computerChoiceDisplay = document.querySelector('.computerChoiceDisplay');
const playerChoiceDisplay = document.querySelector('.playerChoiceDisplay');
const playerScoreDisplay = document.querySelector('.playerScore');
const compScoreDisplay = document.querySelector('.compScore');

let userChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;
let roundDisplay = 0;

resetGame = () => {
  computerScore = 0;
  playerScore = 0;
  gameDisplay.textContent = "Let's do this!";
  playerScoreDisplay.textContent = playerScore;
  compScoreDisplay.textContent = computerScore;
  console.log("Game Reset");
};

pickcomputerChoice = () => {
  let choice = Math.floor(Math.random() * 3) + 1;
  choice == 1
    ? (computerChoice = "Rock")
    : choice == 2
    ? (computerChoice = "Paper")
    : (computerChoice = "Scissors");
  computerChoiceDisplay.textContent = computerChoice;
  return computerChoice;
};

newGame.addEventListener("click", resetGame);
buttons.forEach((buttons) =>
  buttons.addEventListener("click", (e) => {
    if (computerScore == 5 || playerScore == 5) {
        return gameDisplay.textContent = "Game Over"
    }
    userChoice = e.target.id;
    playerChoiceDisplay.textContent = userChoice;
    console.log(`User Chooses ${userChoice}`);
    play();
})
);

play = () => {
    let result;
    pickcomputerChoice();
  computerChoice === userChoice
    ? (result = "Draw")
    : (computerChoice == "Rock" && userChoice == "Scissors") ||
      (computerChoice == "Paper" && userChoice == "Rock") ||
      (computerChoice == "Scissors" && userChoice == "Paper")
    ? (result = "You Lose")
    : (result = "You Win");
  if (result === "Draw") {
    gameDisplay.innerHTML = "It's a Draw!";
  } else if (result === "You Win") {
    gameDisplay.innerHTML = "You've won!!";
    playerScore++;
    if (playerScore == 5) {
    playerScoreDisplay.textContent = playerScore;
    gameDisplay.innerHTML = "You've WON the game!"
    }
    playerScoreDisplay.textContent = playerScore;
  } else {
    gameDisplay.innerHTML = "You've lost! Try again!";
    computerScore++
    if (computerScore == 5) {
    compScoreDisplay.textContent = computerScore;
    gameDisplay.textContent = "You've LOST the game! :("
    }
    compScoreDisplay.textContent = computerScore;
  }
};
