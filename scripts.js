/*
Pseudocode:
1.

*/

function getComputerChoice(){
    let randomNumber = (Math.random().toFixed(2)) * 100;
    let computerChoice = null;

    if (randomNumber>=66){
        return "Scissors";
    }
    else if(randomNumber >=33){
        return "Rock";
    }
    else{
        return "Paper";
    }
};