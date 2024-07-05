
let humanScore=0;
let computerScore=0;

function getComputerChoice(){
    let choice= Math.floor(Math.random() * 3);
    switch(choice){
        case 0:
            console.log('The Computer chose: Rock');
            break;
        case 1:
            console.log('The Computer chose: Paper');
            break;
        case 2:
            console.log('The Computer chose: Scissors');
            break;
    }

}

function getHumanChoice(){
    let userChoice= prompt("Enter Rock, Paper or Scissors: ");
    userChoice.toLowerCase();
    let userChoiceCap= userChoice[0].toUpperCase() + userChoice.split(1);
    console.log('You chose: '+ userChoiceCap);
}


function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        console.log('Tie!');
    }
    
}

let humanChoice= getHumanChoice();
let computerChoice= getComputerChoice();

playRound(humanChoice, computerChoice);