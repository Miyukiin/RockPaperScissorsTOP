/*
Pseudocode:
1.

*/



function getComputerChoice(){
    let randomNumber = (Math.random().toFixed(2)) * 100;
    let computerChoice = null;

    if (randomNumber>=66){
        return "scissors";
    }
    else if(randomNumber >=33){
        return "rock";
    }
    else{
        return "paper";
    }
};

function getHumanChoice(){
    let humanChoice = prompt("Enter your choice.").trim().toLowerCase();
    return humanChoice;
}

function postRoundMessage(outcome, humanChoice, computerChoice){
    if(outcome == "win"){
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return;
    }
    else if(outcome == "lose"){
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        return;
    }
    console.log(`It's a draw! Both chose ${humanChoice}!`)


}


function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        if (humanChoice == "rock"){
            if (computerChoice == "scissors"){
                humanScore++;
                postRoundMessage("win", humanChoice, computerChoice);
                return;
            }
            else if (computerChoice=="paper"){
                computerScore++;
                postRoundMessage("lose", humanChoice, computerChoice);
                return;
            }
        }
        else if (humanChoice == "paper"){
            if (computerChoice == "rock"){
                humanScore++;
                postRoundMessage("win", humanChoice, computerChoice);
                return;
            }
            else if (computerChoice=="scissors"){
                computerScore++;
                postRoundMessage("lose", humanChoice, computerChoice);
                return;
            }
        }
        else if (humanChoice == "scissors"){
            if (computerChoice == "paper"){
                humanScore++
                postRoundMessage("win", humanChoice, computerChoice);
                return;
            }
            else if (computerChoice=="rock"){
                computerScore++;
                postRoundMessage("lose", humanChoice, computerChoice);
                return;
            }
        }
        postRoundMessage("draw", humanChoice, computerChoice);
    }

    for(let i=0; i<5; i++){
        if (humanScore < 3 && computerScore < 3){
            const humanSelection = getHumanChoice();    
            const computerSelection = getComputerChoice();

            playRound(humanSelection, computerSelection);
            continue;
        }
        break;
        
    }

    if (humanScore == 3){
        console.log("You win the game!")
    }
    else{
        console.log("You lost the game!")
    }
}