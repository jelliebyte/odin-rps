let humanScore = 0;
let computerScore = 0;
// let rounds = 0

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorButton = document.querySelector("#scissors");
const buttonsDiv = document.querySelector("#buttons");

buttonsDiv.addEventListener("click", (event) => {
    let target = event.target;

    switch (target.id){
        case 'rock':
            console.log("it works");
            break;
        case 'paper':
            console.log("Paper!");
            break;
        case 'scissors':
            console.log("Scissors!");
            break;
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


// while (rounds < 5){
// playRound(getHumanChoice(), getComputerChoice());
// ++rounds;
// }

// if (humanScore > computerScore){
//     alert("Player has won!");
// }
// else if (computerScore > humanScore){
//     alert("Computer has won!");
// }
// else{
//     alert("A draw!");
// }