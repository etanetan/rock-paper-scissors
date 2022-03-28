let readline = require('readline-sync');

function computerPlay() {
    let choice = Math.floor(Math.random() * 3); // returns 0, 1, or 2 (rock, paper, or scissors)
    if (choice === 0) return 'Rock';
    else if (choice === 1) return 'Paper';
    else return 'Scissors';
}

function playRound(playerSelection, computerSelection) {
    playerSelection = capitalize(playerSelection);
    if(playerSelection == "Rock") {
        switch (computerSelection) {
            case "Rock":
                return "You tie! Rock ties Rock";
            case "Paper":
                return "You lose! Paper beats Rock";
            case "Scissors":
                return "You win! Rock beats Scissors";
        }
    }
    else if(playerSelection == "Paper") {
        switch (computerSelection) {
            case "Rock":
                return "You win! Paper beats Rock";
            case "Paper":
                return "You tie! Paper ties Paper";
            case "Scissors":
                return "You lose! Scissors beats Paper";
        }
    }
    else if(playerSelection == "Scissors") {
        switch (computerSelection) {
            case "Rock":
                return "You lose! Rock beats Scissors";
            case "Paper":
                return "You win! Scissors beats Paper";
            case "Scissors":
                return "You tie! Scissors ties Scissors";
        }
    }
    else return "unknown round...";
}

function game() {
    let playerScore = 0, computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerChoice = readline.question("Choose your weapon: Rock, Paper, or Scissors!: ");
        let result = playRound(playerChoice, computerPlay());
        let winner = result.substring(4,7);
        switch (winner) {
            case "win":
                playerScore++;
                break;
            case "los":
                computerScore++;
                break;
            case "tie":
                break;
        }
        if(result == "unknown round...") {
            console.log("Incorrect input. Try again...");
            i--;
        }
        else if (i !== 4) {
            console.log(`\n${result}`);
            console.log(`\nScores:\tYou: ${playerScore}\tComputer: ${computerScore}\n`);
        }
        else {
            console.log(`\n${result}`);
            console.log(`\nFinal Scores:\tYou: ${playerScore}\tComputer: ${computerScore}\n`);
            if(playerScore > computerScore) console.log("YOU WIN!!\n");
            else if(playerScore == computerScore) console.log("YOU TIE!\n");
            else console.log("You Lose.\n");
        }
    }
}

function capitalize(s) {
    let first = s[0];
    let last = s.slice(1);
    first = first.toUpperCase();
    last = last.toLowerCase();
    return first + last;
}

game();