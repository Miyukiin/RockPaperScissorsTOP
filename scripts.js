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