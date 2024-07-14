const rockbtn=document.querySelector('.rock-btn');
const paperbtn=document.querySelector('.paper-btn');
const scissorsbtn=document.querySelector('.scissors-btn');

rockbtn.addEventListener('click', function() {
    humanChoice='Rock';
    playGame(humanChoice);
});

rockbtn.addEventListener('click', function() {
    humanChoice='Paper';
    playGame(humanChoice);
});

rockbtn.addEventListener('click', function() {
    humanChoice='Scissors';
    playGame(humanChoice);
});

let humanScore=0;
let computerScore=0;

function playGame(humanChoice){

    let i=0;

    while (i<5){
        getComputerChoice();
        playRound(humanChoice, computerChoice);

        let continueChoice=prompt("Would you like to play another round? Enter Yes or No: ");
        if (continueChoice=='Yes' || continueChoice== 'yes'){
                i++;
                continue;
        }
        else{
                resultdiv.textContent += 'Game Over\n';
                break;
        }
        
    }

    resultdiv.textContent += 'Your Score: ' + humanScore + '\n';
    resultdiv.textContent += 'Computer Score ' + computerScore + '\n';

    if (humanScore==computerScore){
        resultdiv.textContent +='You tied with the computer! Guess you are just as smart :)' + '\n';
    }

    else if(humanScore > computerScore){
        resultdiv.textContent+='You beat the computer! Humans still control machines I guess!' + '\n';
    }

    else{
        resultdiv.textContent+='Oh no, you lost. Better luck next time!' + '\n';
    }
    
}


function getComputerChoice(){
    let choice= Math.floor(Math.random() * 3);
    switch(choice){
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }

}

function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        resultdiv.textContent+="Tie!" + '\n';
    }
    else if (humanChoice == 'Rock' && computerChoice == 'Scissors' ||
        humanChoice == 'Paper' && computerChoice == 'Rock' ||
        humanChoice == 'Scissors' && computerChoice == 'Paper'){
        resultdiv.textContent += 'You win! ${humanChoice} beats ${computerChoice} \n';
        humanScore++;
    }
    else{

        resultdiv.textContent +='You lose. ${computerChoice} beats ${humanChoice} \n';
        computerScore++;
    }
    
}