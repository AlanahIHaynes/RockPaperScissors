
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
    console.log('You chose: '+ userChoice);
}

getHumanChoice();
getComputerChoice();