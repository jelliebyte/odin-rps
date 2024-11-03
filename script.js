let humanScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
    randNum = Math.floor(Math.random() * 3);
    switch (randNum){
    case 0:
        console.log("rock!");
        return "Rock";
    case 1:
        console.log("paper!");
        return "Paper";
    case 2:
        console.log("scissors!");
        return "Scissors";
    default:
        alert("Invalid!!");
        break;
    }
}

let getHumanChoice = () => {
    choice = prompt("Rock, Paper, Scissors!").toLowerCase();

    if (choice === "rock" || choice === "paper" || choice === "scissors"){
        console.log(choice);
        return choice;
    }
    else {
        alert("Invalid choice!");
        location.reload();
    }
}

function playRound(humanChoice, computerChoice){
    let hasWon = false;
    switch(humanChoice){
        case "rock":
            if  (computerChoice === "Rock"){
                console.log("Tie!");
                break;
            }
            else if (computerChoice === "Paper"){
                console.log("Lose!");
                break;
            }
            else if (computerChoice === "Scissors"){
                console.log("Win!");
                hasWon = true;
                break;
            }

        case "paper":
            if (computerChoice === "Rock"){
                console.log("Win!");
                hasWon = true;
                break;
            }
            else if (computerChoice === "Paper"){
                console.log("Tie!");
                break;
            }
            else if (computerChoice === "Scissors"){
                console.log("Lose!");
                break;
            }

        case "scissors":
            if (computerChoice === "Rock"){
                console.log("Lose!");
                break;
            }
            else if (computerChoice === "Paper"){
                console.log("Win!");
                hasWon = true;
                break;
            }
            else if (computerChoice === "Scissors"){
                console.log("Tie!");
                break;
            }

        default:
            alert("Invalid option!");
            break;
}
    if (hasWon === true){
        --computerScore;
        ++humanScore;
    }
    else {
        ++computerScore;
        --humanScore;
    }

    if (computerScore < 0){
        computerScore = 0;
    }
    else if (humanScore < 0){
        humanScore = 0;
    }

    console.log("The computers score is " + computerScore + " !");
    console.log("Your score is " + humanScore + " !");
}

playRound(getHumanChoice(), getComputerChoice());

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

/*
Add variables for human and computer score
*/