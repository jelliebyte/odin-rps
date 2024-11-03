let humanScore = 0;
let computerScore = 0;
let rounds = 0

let getComputerChoice = () => {
    randNum = Math.floor(Math.random() * 3);
    switch (randNum){
    case 0:
        console.log("The computer played: rock!");
        return "Rock";
    case 1:
        console.log("The computer played: paper!");
        return "Paper";
    case 2:
        console.log("The computer played: scissors!");
        return "Scissors";
    default:
        alert("Invalid!!");
        break;
    }
}

let getHumanChoice = () => {
    choice = prompt("Rock, Paper, Scissors!").toLowerCase();

    if (choice === "rock" || choice === "paper" || choice === "scissors"){
        console.log("You played: " + choice);
        return choice;
    }
    else {
        alert("Invalid choice!");
        // choice = ""; // fix later >_>
        // getHumanChoice();
        location.reload();
    }
}

function playRound(humanChoice, computerChoice){
    let hasWon = false;
    let hasLost = false;
    switch(humanChoice){
        case "rock":
            if  (computerChoice === "Rock"){
                console.log("Tie!");
                break;
            }
            else if (computerChoice === "Paper"){
                console.log("Lose!");
                hasLost = true;
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
                hasLost = true;
                break;
            }

        case "scissors":
            if (computerChoice === "Rock"){
                console.log("Lose!");
                hasLost = true;
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
        ++humanScore;
    }
    else if (hasLost === true){
        ++computerScore;
    }
    else{
        computerScore;
        humanScore;
    }

    console.log("The computers score is " + computerScore + " !");
    console.log("Your score is " + humanScore + " !");
}

while (rounds < 5){
playRound(getHumanChoice(), getComputerChoice());
++rounds;
}

if (humanScore > computerScore){
    alert("Player has won!");
}
else if (computerScore > humanScore){
    alert("Computer has won!");
}
else{
    alert("A draw!");
}

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