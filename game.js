const ROCK = "rock";
const PAPER = "paper";
const SCISSOR = "scissor";

let player1Wins = 0;
let botWins = 0;
let ties = 0;


function getComputerChoice(){

let value = Math.ceil(Math.random() * 3);

if (value == 1)
    return ROCK;
else if (value == 2)
    return PAPER;
else if (value == 3)
    return SCISSOR;

}

function getHumanChoice(){
    let choice;
    while(!choice)
        {
            choice = prompt("1- Rock, 2- paper, 3- scissor");
        }

    if (choice == 1)
        return ROCK;
    else if (choice == 2)
        return PAPER;
    else if (choice == 3)
        return SCISSOR;

}


function roundWinner(player1, bot)
{
    if (player1 == ROCK && bot == SCISSOR)
        return "player1";
    else if (player1 == SCISSOR && bot == PAPER)
        return "player1";
    else if (player1 == PAPER && bot == ROCK)
        return "player1";
    else if (player1 == ROCK && bot == PAPER)
        return "bot";
    else if (player1 == SCISSOR && bot == ROCK)
        return "bot";
    else if (player1 == PAPER && bot == SCISSOR)
        return "bot";
    else if (player1 == ROCK && bot == ROCK)
        return "tie";
    else if (player1 == SCISSOR && bot == SCISSOR)
        return "tie";
    else if (player1 == PAPER && bot == PAPER)
        return "tie";
}


function gameWinner(player1Wins, botWins)
{
    if (player1Wins > botWins)
        return "You won!";
    else if (player1Wins < botWins)
        return "You lost ):";
    else
        return "Tie!";
}

function playGame()
{
    let playerOneChoice = getHumanChoice();
    let botChoice = getComputerChoice();

    let winner = roundWinner(playerOneChoice, botChoice);

    if (winner == "player1")
        {
            player1Wins++;
            console.log("You won!");
        }
    else if (winner == "bot")
        {
            botWins++;
            console.log("You lost ):");
        }
    else
        {
            ties++;
            console.log("Tie!");
        }
        displayResults(player1Wins, botWins)


}

function displayResults(player1Wins, botWins)
{
    console.log("Player wins: " + player1Wins);
    console.log("Bot Wins: " + botWins);
    console.log("Ties: " + ties);

}

playGame();
playGame();
playGame();
playGame();
playGame();

displayResults(player1Wins, botWins);


let winner = gameWinner(player1Wins, botWins);

console.log(winner);
