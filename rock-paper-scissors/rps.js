let playerScore = 0;
let computerScore = 0;
let buttons = document.querySelectorAll('button');

function computerPlay(){ 
    let choices = ['Rock', 'Paper', 'Scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function playRound(userChoice){

    let computerChoice = computerPlay();
    console.log(computerChoice);
    let result = "";

    if ((userChoice === 'Rock' && computerChoice === 'Scissors') || 
    (userChoice === 'Paper' && computerChoice === 'Rock') ||
    (userChoice === 'Scissors' && computerChoice === 'Paper')) {
        playerScore += 1;
        result = ("Player Won!" + userChoice + " beats " + computerChoice +
        "<br><br>Player Score: " + playerScore + " || " + "Computer Score: " + computerScore);

        if (playerScore === 5) {
            result += '<br><br>You won the game! Reload the page to play again';
            disableButtons();
        }
    } else if (userChoice === computerChoice) {
        result = ('It\'s a tie. You both chose ' + userChoice
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
    } else {
        computerScore += 1;
        result = result = ("Computer Won!" + computerChoice + " beats " + userChoice +
        "<br> Player Score: " + playerScore + " || " + "Computer Score: " + computerScore);

        if (computerScore === 5) {
            result += '<br><br>Computer won the game! Reload the page to play again';
            disableButtons();
        }
    }
    document.getElementById('result').innerHTML = "<br>" + result;
    return;

}


buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})


// if ((computerChoice === 'Rock' && userChoice === 'Scissors') || 
//     (computerChoice === 'Paper' && userChoice === 'Rock') ||
//     (computerChoice === 'Scissors' && userChoice === 'Paper'))









