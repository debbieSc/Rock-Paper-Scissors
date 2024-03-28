const choice = ['rock', 'paper', 'scissors'];
let player;
let computer;
let playerCheck = document.querySelector(".playerCheck");
let compCheck = document.querySelector(".compCheck");
let gameCheck = document.querySelector(".gameCheck");
let playerResult = document.querySelector(".playerScore");
let computerResult = document.querySelector(".computerScore");
let playerScore = 0;
let computerScore = 0;
let gameResult = document.querySelector(".gameResult");


   

function getComputerChoice() {
    const compChoice = choice[Math.floor(Math.random() * choice.length)];
    
    return compChoice;
    
};




    const buttonChoice = document.querySelectorAll(".buttonChoice");


    buttonChoice.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computer = getComputerChoice();
    
    playerCheck.textContent = `Your Choice: ${player}`;
    compCheck.textContent  = `Computer Choice: ${computer}`;
    gameCheck.textContent = winner(player, computer);

    
    
    
    
}));




function winner (playerSelection, computerSelection) {


    while (playerScore <5 && computerScore <5 ){

   if (playerSelection == computerSelection) {
        playerScore +=1;
        computerScore +=1;
        playerResult.textContent = `Player Score: ${playerScore}`;
        computerResult.textContent = `Computer Score: ${computerScore}`;
        return "Result: It's a Tie";
    }

    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") || 
        (playerSelection == "scissors" && computerSelection == "paper") 
        ){
            playerScore +=1
            playerResult.textContent = `Player Score: ${playerScore}`;
            computerResult.textContent = `Computer Score: ${computerScore}`;
            return "Result: You Win";
        }
    else {
        return "Computer";
    }
    

}

function playRound (playerSelection, computerSelection) {
    const result = winner(playerSelection, computerSelection);
    if(result == "Tie"){
        return "It's a Tie"
    }
    else if(result == "Player"){
    return `you win ${playerSelection} beats ${computerSelection}`
    }
    else {
        return `you lose ${computerSelection} beats ${playerSelection}`
    }

}

function getPlayerChoice (){
    let checkInput = false;
    while(checkInput == false){
        const select = prompt("Rock Paper Scissors");
        if(select == null){
            continue;
        }
        const choiceInLower = select.toLowerCase();
        if(choice.includes(choiceInLower)){
            checkInput = true;
            return choiceInLower;
        }
    }
}




function playGame (){
    let score = 0;
    let scoreComputer = 0;
    console.log("Welcome")
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if (winner(playerSelection, computerSelection) == "Player"){
            score++;
        }
        else if(winner(playerSelection, computerSelection) == "Computer"){
            scoreComputer++;
        }
    }

    
}



if(playerScore == 5 && computerScore <=4){
        
        gameResult.textContent = `YOU WIN!`;
}
else if(computerScore == 5 && playerScore <=4){
    
    gameResult.textContent = `COMPUTER WINS`;
}

else{
    gameResult.textContent = "IT'S A TIE";
}
   
const newButton = document.createElement(`Button`);
newButton.textContent = "Play Again";
document.body.appendChild(newButton);

newButton.addEventListener("click", () => {
    window.location.reload();
})
}




    

