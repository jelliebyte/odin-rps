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
        alert("No number entered!");
        break;
    }
}

alert(getComputerChoice());

/*
 @todo: make it so that getComputerChoice returns either
 rock, paper, or scissors
- Make sure it returns 1, 2 or 3
 - Make it return a string
 */