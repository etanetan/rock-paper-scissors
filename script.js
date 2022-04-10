let playerScore = 0, computerScore = 0;
let result = '';

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")) {
        result = 'computer';
        computerScore++;
    }
    else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")) {
        result = 'player';
        computerScore++;
    }
    else {
        result = 'tie';
    }
}

function computerPlay() {
    let choice = Math.floor(Math.random() * 3); // returns 0, 1, or 2 (rock, paper, or scissors)
    if (choice === 0) return 'Rock';
    else if (choice === 1) return 'Paper';
    else return 'Scissors';
}

const showResults = document.getElementById('results');
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const playerScoreText = document.getElementById('playerScore');
const computerScoreText = document.getElementById('computerScore');

rockButton.addEventListener('click', () => clickChoice("Rock"));
paperButton.addEventListener('click', () => clickChoice("Paper"));
scissorsButton.addEventListener('click', () => clickChoice("Scissors"));

function clickChoice(playerSelection) {
    if (playerScore === 5) {
        showResults.textContext = 'You WIN!!';
        return;
    }
    if (computerScore === 5) {
        showResults.textContent = 'You Lose.';
        return;
    }
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    resultsUpdated(playerSelection, computerSelection, result);
    playerScoreText.textContent = `Player\n${playerScore}`;
    computerScoreText.textContent = `Computer\n${computerScore}`;
    if (playerScore === 5) {
        showResults.textContext = 'You WIN!!';
        return;
    }
    if (computerScore === 5) {
        showResults.textContent = 'You Lose.';
        return;
    }
}

function resultsUpdated(playerSelection, computerSelection, result) {
    if (result === 'computer') { // computer won this round, display results
        showResults.textContext = `${computerSelection} beats ${playerSelection}`;
    }
    else if (result === 'player') { // player won this round, display results
        showResults.textContext = `${playerSelection} beats ${computerSelection}`;
    }
}