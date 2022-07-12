const buttons = document.querySelectorAll("button.selection");
const gameDisplay = document.querySelector(".result");
const computerChoiceDisplay = document.querySelector('.computerChoiceDisplay');
const playerChoiceDisplay = document.querySelector('.playerChoiceDisplay');
const playerScoreDisplay = document.querySelector('.playerScore');
const compScoreDisplay = document.querySelector('.compScore');
let playerScore = 0;
let computerScore = 0;
let roundDisplay = 0;

resetGame = () => {
    const newGame = document.querySelector('.newgame');
    newGame.style.display = "none";
    computerScore = 0;
    playerScore = 0;
    gameDisplay.textContent = "Let's do this!";
    playerScoreDisplay.textContent = playerScore;
    compScoreDisplay.textContent = computerScore;
    console.log("Game Reset");
};

let computerChoice;
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


let userChoice;
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
            popup("Win")
            playerScoreDisplay.textContent = playerScore;
        }
        playerScoreDisplay.textContent = playerScore;
    } else {
        gameDisplay.innerHTML = "You've lost! Try again!";
        computerScore++
        if (computerScore == 5) {
            popup("Lose");
            compScoreDisplay.textContent = computerScore;
        }
        compScoreDisplay.textContent = computerScore;
    }
};


popup = (value) => {
    const newGame = document.querySelector(".newgame");
    newGame.style.display = "block";
    newGame.addEventListener("click", resetGame);
    if (value = "Win") {
    gameDisplay.innerHTML = "You've WON the game!"
    } else {
    gameDisplay.textContent = "You've LOST the game! :("
}};

