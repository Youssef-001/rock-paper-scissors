const ROCK = "rock";
const PAPER = "paper";
const SCISSOR = "scissor";

let player1Wins = 0;
let botWins = 0;
let ties = 0;

let round = 0;


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
    let player_choice;

    let game = document.querySelector('.game');



game.addEventListener('click', function(event) {
    let computer_choice = getComputerChoice();
    let playerWins =    Number(document.querySelector('.player').textContent);
    let botWinss = Number(document.querySelector('.bot').textContent);


    if (playerWins == 5 || botWinss == 5)
        {
            let buttons = document.querySelectorAll('button');
            console.log(buttons)

            buttons.forEach(function(button){
                button.disabled = true;
            })



            let winner_div = document.querySelector('.winner-div');
            
            winner_div.innerText = gameWinner(playerWins, botWinss);
            console.log(playerWins, botWinss);
            

        }

    if (playerWins <= 4 && botWinss <= 4){
    player_choice = event.target.innerText;
    console.log(player_choice);
    console.log(computer_choice);
    playRound(player_choice, computer_choice);    
    round++;
    }



})  




    


}

function displayResults(player1Wins, botWins)
{
    console.log("Player wins: " + player1Wins);
    console.log("Bot Wins: " + botWins);
    console.log("Ties: " + ties);

}



displayResults(player1Wins, botWins);


let winner = gameWinner(player1Wins, botWins);

console.log(winner);



function playRound(playerChoice,computerChoice)
{
    let player_score = document.querySelector('.player');
    let bot_score = document.querySelector('.bot');
    
    let winner = roundWinner(playerChoice, computerChoice);
    if (winner == "player1")
        {
            let player_score_num = Number(player_score.innerText);
            player_score_num++;

            player_score.innerText = player_score_num;

        }

    else if (winner == "bot")
        {
            let bot_score_num = Number(bot_score.innerText);
            bot_score_num++;

            bot_score.innerText = bot_score_num;
        }

}


playGame();