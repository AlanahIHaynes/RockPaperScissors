const rockbtn=document.querySelector('.rock-btn');
const paperbtn=document.querySelector('.paper-btn');
const scissorsbtn=document.querySelector('.scissors-btn');

const resultdiv=document.createElement('div');
resultdiv.id= 'resultDiv';

document.body.appendChild(resultdiv);

let humanScore =0;
let computerScore=0;

rockbtn.addEventListener('click', function() {
    playRPS('Rock');
});

scissorsbtn.addEventListener('click', function() {
    playRPS('Scissors');
});

paperbtn.addEventListener('click', function() {
    playRPS('Paper');
});



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
    let roundResult = '';
    if (humanChoice == computerChoice){
        resultdiv.textContent+="Tie!" + '\n';
    }
    else if (humanChoice == 'Rock' && computerChoice == 'Scissors' ||
        humanChoice == 'Paper' && computerChoice == 'Rock' ||
        humanChoice == 'Scissors' && computerChoice == 'Paper'){
        roundResult = 'You win! ${humanChoice} beats ${computerChoice} \n';
        humanScore++;
    }
    else{

        roundResult='You lose. ${computerChoice} beats ${humanChoice} \n';
        computerScore++;
    }

    return roundResult;
}



function playRPS(choice){
    let i=0;
    
    while (i < 5) {
        resultdiv.textContent += `Round ${i + 1} complete!\n`;
        let computerChoice = getComputerChoice();
        let roundResult = playRound(choice, computerChoice);
        resultdiv.textContent += `${roundResult}\n`;
        resultdiv.textContent += `Your Score: ${humanScore}. Computer Score: ${computerScore}\n`;
        i++;
    }

    if (humanScore==computerScore){
        resultdiv.textContent +='You tied with the computer! Guess you are just as smart :)' + '\n';
    }

    else if(humanScore > computerScore){
        resultdiv.textContent+='You beat the computer! Humans still control machines I guess!' + '\n';
    }

    else{
        resultdiv.textContent+='Oh no, you lost. Better luck next time!' + '\n';
    }
    

   
    let continueChoice=prompt("Would you like to play another round? Enter Yes or No: ");
    if (continueChoice=='Yes' || continueChoice== 'yes'){
            resultdiv.textContent='';
            playRPS(choice);
    }
    else{
            resultdiv.textContent += 'Game Over\n';
    }
    
}






