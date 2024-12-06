let humanScore = 5;
let computerScore = 0;
let choice = "";
let rounds = 5

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorButton = document.querySelector("#scissors");
const buttonsDiv = document.querySelector("#buttons");
const hScoreCounter = document.querySelector("#humanScore");
const cScoreCounter = document.querySelector("#compScore");
const winLose = document.createElement("div");



let getComputerChoice = () => {
    randNum = Math.floor(Math.random() * 3); // gets a number between 1 - 3
    switch (randNum){
    case 0:
        console.log("The computer played: rock!");
        return "rock";
    case 1:
        console.log("The computer played: paper!");
        return "paper";
    case 2:
        console.log("The computer played: scissors!");
        return "scissors";
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
            if  (cChoice === "rock"){
                console.log("Tie!");
                break;
            }
            else if (cChoice === "paper"){
                console.log("Lose!");
                hasLost = true;
                break;
            }
            else if (cChoice === "scissors"){
                console.log("Win!");
                hasWon = true;
                break;
            }

        case "paper":
            if (cChoice === "rock"){
                console.log("Win!");
                hasWon = true;
                break;
            }
            else if (cChoice === "paper"){
                console.log("Tie!");
                break;
            }
            else if (cChoice === "scissors"){
                console.log("Lose!");
                hasLost = true;
                break;
            }

        case "scissors":
            if (cChoice === "rock"){
                console.log("Lose!");
                hasLost = true;
                break;
            }
            else if (cChoice === "paper"){
                console.log("Win!");
                hasWon = true;
                break;
            }
            else if (cChoice === "scissors"){
                console.log("Tie!");
                break;
            }
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

    hScoreCounter.textContent= `Human score ${humanScore}`;
    cScoreCounter.textContent = `Computer score ${computerScore}`;
}

buttonsDiv.addEventListener("click", (event) => {
    let target = event.target;
    console.log(target.id);
    playRound(target.id, getComputerChoice());
    });
