let humanScore = 0;
let computerScore = 0;
let choice = "";
let rounds = 1

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorButton = document.querySelector("#scissors");
const buttonsDiv = document.querySelector("#buttons");

let playerChoice = buttonsDiv.addEventListener("click", (event) => {
    let target = event.target;

    switch (target.id){
        case 'rock':
            choice = "rock";
            return choice;
        case 'paper':
            choice = "paper";
            return choice;
        case 'scissors':
            choice = "scissors";
            return choice;
        case _:
            console.log("Invalid!");
            break;
    }
});

let getComputerChoice = () => {
    randNum = Math.floor(Math.random() * 3);
    switch (randNum){
    case 0:
        console.log("The computer played: rock!");
        return "rock";
    case 1:
        console.log("The computer played: paper!");
        return "rock";
    case 2:
        console.log("The computer played: scissors!");
        return "rock";
    default:
        alert("Invalid!!");
        break;
    }
}

function playRound(pChoice, cChoice){
    let hasWon = false;
    let hasLost = false;
    switch (pChoice){
        case "rock":
            if (cChoice === "paper"){
                console.log("Lost!");
                hasLost = true;
                break;
            }
            else if (cChoice === "scissors"){
                console.log("Won!");
                hasWon = true;
                break;
            }
        case "paper":
            if (cChoice === "rock"){
                console.log("Won!");
                hasWon = true;
                break;
            }
            else if (cChoice === "scissors"){
                console.log("Lost!");
                hasWon = false;
                break;
            }
        case "scissors":
            if (cChoice === "paper"){
                console.log("Won!");
                hasWon = true;
                break;
            }
            else if (cChoice === rock){
                console.log("Lost!");
                hasLost = true;
                break;
            }
        case (pChoice === cChoice):
            console.log("Draw!");
            break;
        default:
            alert("Nah");
            break;
    }
    if (hasWon === true){
        ++humanScore;
    }
    else if (hasLost === true){
        ++computerScore;
    }
    else{
        humanScore;
        computerScore;
    }

    console.log(`Human score ${humanScore}`);
    console.log(`Computer score ${computerScore}`);
}

