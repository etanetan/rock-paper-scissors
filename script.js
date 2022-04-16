// variables to keep track of the scores of both the player and computer
let playerScore = 0;
let computerScore = 0;
// string to keep track of who wins each round
let result = '';
// this function plays one round and decides who wins the round based on each of the player and computer's
// selection, and then decides who wins, increments their score, and changes the result string to who won this round
function playRound(playerSelection, computerSelection) {
    if ((playerSelection === 'Rock' && computerSelection === 'Paper') ||
    (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
    (playerSelection === 'Scissors' && computerSelection === 'Rock')) {
        result = 'computer';
        computerScore++;
    }
    else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'Paper' && computerSelection === 'Rock') ||
    (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
        result = 'player';
        playerScore++;
    }
    else {
        result = 'tie';
    }
}
// function to randomly choose rock paper or scissors for the computer's selection
function computerPlay() {
    let choice = Math.floor(Math.random() * 3); // returns 0, 1, or 2 (rock, paper, or scissors)
    if (choice === 0) return 'Rock';
    else if (choice === 1) return 'Paper';
    else return 'Scissors';
}
// DOM elements that I need to add event listeners to and change their text content
// to display info to the user and read their clicks
const showResults = document.getElementById('results');
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const playerScoreText = document.getElementById('playerScore');
const computerScoreText = document.getElementById('computerScore');
// added event listeners to the rock paper and scissors symbols to read user clicks
// and call the clickChoice function accordinglyl
rockButton.addEventListener('click', () => clickChoice('Rock'));
paperButton.addEventListener('click', () => clickChoice('Paper'));
scissorsButton.addEventListener('click', () => clickChoice('Scissors'));
/* this function checks if the game is already over (either player has reached 5 round wins)
 and if not, runs a round calling the playRound function with the selected playerSelection.
 With the updated result string, it calls resultsUpdated, which displays the correct round summary at the top of the screen.
 The player and computer scores are then updated, and if the game is over, the correct game summary is displayed at the top.
*/
function clickChoice(playerSelection) {
    if (playerScore === 5) {
        showResults.textContent = 'You won the game!! Play again!';
        return;
    }
    if (computerScore === 5) {
        showResults.textContent = 'You lost the game. Play again!';
        return;
    }

    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    resultsUpdated(playerSelection, computerSelection, result);
    playerScoreText.innerHTML = `Player: ${playerScore}`;
    computerScoreText.innerHTML = `Computer: ${computerScore}`;

    if (playerScore === 5) {
        showResults.textContent = 'You won the game!! Play again!';
        return;
    }
    if (computerScore === 5) {
        showResults.textContent = 'You lost the game. Play again!';
        return;
    }
}
// function that takes the two selections for the players, and the result of the round
// and displays the summary of the round at the top of the screen
function resultsUpdated(playerSelection, computerSelection, result) {
    if (result === 'computer') { // computer won this round, display results
        showResults.innerHTML = `You lose: ${computerSelection.toLowerCase()} beats ${playerSelection.toLowerCase()}`;
    }
    else if (result === 'player') { // player won this round, display results
        showResults.innerHTML = `You win: ${playerSelection.toLowerCase()} beats ${computerSelection.toLowerCase()}`;
    }
    else { // the round was a tie, display results
        showResults.innerHTML = `You tie: ${playerSelection.toLowerCase()} ties ${computerSelection.toLowerCase()}`;
    }
}