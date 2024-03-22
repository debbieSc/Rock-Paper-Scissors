const choice = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const compChoice = choice[Math.floor(Math.random() * choice.length)];
    return compChoice;
}

function winner (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    }

    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") || 
        (playerSelection == "scissors" && computerSelection == "paper") 
        ){
            return "Player";
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
}google-chrome




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

    
    if(score > scoreComputer){
        console.log(`Game over You Win - your score ${score} computer score ${scoreComputer}`);
    }
    else if (scoreComputer > score){
        console.log(`Game over You Lose - your score ${score} computer score ${scoreComputer}`);
    }
    else {
        console.log(`Game over It's a Tie - your score ${score} computer score ${scoreComputer}`);
    }
}

playGame()