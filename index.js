const choice = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    const compChoice = choice[Math.floor(Math.random() * choice.length)];
    return compChoice;
}

function winner (playerselection, computerSelection) {
    if (playerselection == computerSelection) {
        return "Tie";
    }

    else if (
        (playerselection == "Rock" && computerSelection == "Scissors") ||
        (playerselection == "Paper" && computerSelection == "Rock") || 
        (playerselection == "Scissors" && computerSelection == "Paper") 
        ){
            return "Player";
        }
    else {
        return "Computer";
    }
    

}

function playRound (playerselection, computerSelection) {
    const result = winner(playerselection, computerSelection);
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

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));