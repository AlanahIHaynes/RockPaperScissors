
function getComputerChoice(){
    let choice= Math.floor(Math.random() * 3);
    switch(choice){
        case 0:
            console.log('The Computer chose: Rock');
            return 'Rock';
            break;
        case 1:
            console.log('The Computer chose: Paper');
            return 'Paper';
            break;
        case 2:
            console.log('The Computer chose: Scissors');
            return 'Scissors';
            break;
    }

}

function getHumanChoice(){
    let userChoice= prompt("Enter Rock, Paper or Scissors: ");
    userChoice.toLowerCase();
    let userChoiceCap= userChoice[0].toUpperCase() + userChoice.slice(1);
    console.log('You chose: '+ userChoiceCap);
    return userChoiceCap;
}


function playRound(humanChoice, computerChoice){
    let winner=0;
    if (humanChoice == computerChoice){
        console.log('Tie!');
    }
    else if (humanChoice == 'Rock' && computerChoice == 'Scissors' ||
        humanChoice == 'Paper' && computerChoice == 'Rock' ||
        humanChoice == 'Scissors' && computerChoice == 'Paper'){
        console.log('You win! ' + humanChoice+ ' beats '+ computerChoice);
        winner=1;
    }
    else{
        console.log('You lose. ' + computerChoice+ ' beats '+ humanChoice);
        winner=2;
    }

    return winner;
}


function playGame(){
    let humanScore=0;
    let computerScore=0;
    

    for (let i = 0; i < 5; i++){
        let humanChoice= getHumanChoice();
        let computerChoice= getComputerChoice();
        let winner=playRound(humanChoice, computerChoice);
        console.log('Round '+ Number(i+1) + ' complete!');
        if (winner==1){
            humanScore++;
        }
        else if (winner==2) {
            computerScore++;
        }
        console.log('Your Score: '+ humanScore+ '. Computer Score: '+ computerScore)

        if (i==4){
            console.log('Game Complete');
        }
        else{
            let continueChoice=prompt("Would you like to play another round? Enter Yes or No: ");
            if (continueChoice=='No' || continueChoice== 'no'){
                break;
            }
        }
       
    }

    if (humanScore==computerScore){
        console.log('You tied with the computer! Guess you are just as smart :)');
    }

    else if(humanScore > computerScore){
        console.log('You beat the computer! Humans still control machines I guess!');
    }

    else{
        console.log('Oh no, you lost. Better luck next time!');
    }
    

}

playGame();