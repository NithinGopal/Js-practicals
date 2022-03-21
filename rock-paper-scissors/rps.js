
function computerPlay(){ 
    let x = Math.floor(Math.random() * 3) + 1;
   switch (x) {
      case 1:
         return 'Rock';
         break;
      case 2:
         return 'Paper';
         break;
      case 3:
         return 'Scissors';
         break;
   }
}

function playRound(){
    let userChoice = prompt("Choose!");
    let computerChoice = computerPlay();

    console.log(userChoice);
    console.log(computerChoice);

    if (userChoice === 'Rock' && computerChoice === 'Paper'){
        console.log("You loose! Paper beats Rock!");
    }else if (userChoice === 'Rock' && computerChoice === 'Scissors'){
        console.log("You Win! Rock beats Scissors!");
    }else if (userChoice === 'Paper' && computerChoice === 'Scissors'){
        console.log("You Loose! Scissors beats Paper!");
    }else if (userChoice === 'Paper' && computerChoice === 'Rock'){
        console.log("You Win! Paper beats Rock!");
    }else if (userChoice === 'Scissors' && computerChoice === 'Rock'){
        console.log("You Loose! Rock beats Scissors!");
    }else if (userChoice === 'Scissors' && computerChoice === 'Paper'){
        console.log("You Win! Scissors beats Paper!");
    }else{
        console.log("Its a draw!");
    }
}

function game(){
    for (i = 1; i <= 5; i++){
        playRound();
    }
}
game();









