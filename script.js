let getComputerChoice = () => {
    randNum = Math.floor(Math.random() * 3);
    switch (randNum){
    case 0:
        return "Rock";
    case 1:
        return "Paper";
    case 2:
        return "Scissors";
    default:
        alert("Invalid!!");
        break;
    }
}

let getHumanChoice = () => {
    choice = prompt("Rock, Paper, Scissors!").toLowerCase();

    if (choice === "rock" || choice === "paper" || choice === "scissors"){
        return choice;
    }
    else {
        alert("Invalid choice!");
        location.reload();
    }
}

console.log(getHumanChoice());
console.log(getComputerChoice());

/*
 @todo: make it so that getComputerChoice returns either
 rock, paper, or scissors
- Make sure it returns 1, 2 or 3
 - Make it return a string
 */

 /*
 @todo: 
create a function for player input
create a variable to store the players input
compare this input to "Rock", "Paper", or "Scissors"
if the comparison is true, return the choice
if the comparison is NOT true, prompt again

 */