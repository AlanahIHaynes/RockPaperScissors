
function getComputerChoice(){
    let choice= Math.floor(Math.random() * 3);
    console.log('The Computer chose: ');
    switch(choice){
        case 0:
            console.log('Rock');
            break;
        case 1:
            console.log('Paper');
            break;
        case 2:
            console.log('Scissors');
            break;
    }

}

function getHumanChoice(){
    let userChoice= prompt("Enter Rock, Paper or Scissors: ");
    console.log('You chose: '+ userChoice);
}