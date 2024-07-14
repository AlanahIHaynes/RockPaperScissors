const rockbtn=document.querySelector('.rock-btn');
const paperbtn=document.querySelector('.paper-btn');
const scissorsbtn=document.querySelector('.scissors-btn');

const resultdiv=document.querySelector('.results');


rockbtn.addEventListener('click', function() {
    humanChoice='Rock';
    playRound(humanChoice);

});
    
paperbtn.addEventListener('click', function() {
    humanChoice='Paper';
    playRound(humanChoice);
        
});
    
scissorsbtn.addEventListener('click', function() {
    humanChoice='Scissors';
    playRound(humanChoice);
        
});
    



let humanScore=0;
let computerScore=0;
let round=0;



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

function playRound(humanChoice){
    let computerChoice=getComputerChoice();
    if (humanChoice == computerChoice){
        addResultText(`Tie! Both you and the computer chose ${computerChoice}!`);
    }
    else if (humanChoice == 'Rock' && computerChoice == 'Scissors' ||
        humanChoice == 'Paper' && computerChoice == 'Rock' ||
        humanChoice == 'Scissors' && computerChoice == 'Paper'){
        addResultText(`You win! The computer chose ${computerChoice}, and ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    }
    else{

        addResultText(`You lose. The computer chose ${computerChoice}, and ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }
    round++;
    if (round==5){
        displayResults();
    }
    
}

function addResultText(text){
    const paragraph=document.createElement('p');
    paragraph.textContent = text;
    resultdiv.appendChild(paragraph);
}

function displayResults(){

    addResultText('Your Score: ' + humanScore);
    addResultText('Computer Score: ' + computerScore);

    if (humanScore==computerScore){
        addResultText('You tied with the computer! Guess you are just as smart :)');
    }

    else if(humanScore > computerScore){
        addResultText('You beat the computer! Humans still control machines I guess!');
    }

    else{
        addResultText('Oh no, you lost. Better luck next time!');
    }
}