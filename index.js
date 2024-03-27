const choice = ['rock', 'paper', 'scissors'];
let player;
let playerCheck = document.querySelector(".playerCheck");
let compCheck = document.querySelector(".compCheck");
let gameCheck = document.querySelector(".gameCheck")


function getComputerChoice() {
    const compChoice = choice[Math.floor(Math.random() * choice.length)];
    return compChoice;
}

console.log(getComputerChoice());

const buttons = document.querySelectorAll(".buttons");
    console.log(buttons);



buttons.forEach(button => ("click", () => {

    player = button.textContent;
    getComputerChoice();
    playerCheck.textContent = `Your Choice: ${player}`;
    compCheck.textContent  = `Computer Choice: ${compChoice}`;
    gameCheck = result();
    
}))

function result (){
    if(player == compChoice){
        return "Tie"
    }
    else if (compChoice == "rock"){
        return (player == "paper") ? "You Win" : "You Lose"
    }
    else if (compChoice == "paper") {
        return (player == "scissors") ? "You Win" : "You Lose"
    }
    else if (compChoice == "scissors") {
        return (player == "rock") ? "You Win" : "You Lose"
    }
}



