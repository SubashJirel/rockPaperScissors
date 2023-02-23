
function game() {
    let playerScore = 0
    let computerScore = 0
    while(playerScore<5 && computerScore<5) {
        let playerSelection = prompt("Enter your choice").toLowerCase()
        let computerSelection= getComputerChoice().toLowerCase()
        let win = checkWin(playerSelection,computerSelection)

        if(win == 'player') playerScore++
        else if(win == 'computer') computerScore++
        console.log(`Player Score: ${playerScore} \n Computer Score: ${computerScore}`)     
    }
    
    if(playerScore ==5) {
        console.log("player won")
    }
    else if(computerScore ==5)
        console.log("Computer won")
    else console.error("player score or computer score is not 5")
    
  }

function checkWin(playerSelection, computerSelection) { //checkWIn
    // your code here!
    if((playerSelection == 'rock'&& computerSelection == 'scissors') || (playerSelection == 'scissors'&& computerSelection == 'paper') || (playerSelection == 'paper'&& computerSelection == 'rock'))
    {
        return 'player'
    }
    else if(playerSelection == computerSelection) {
        return 'draw'
    }
    else {
        return 'computer'
    }
  }

function getComputerChoice() {
    let rand = Math.random();
    if(rand <0.333333) {
        return 'rock';
    }
    else if(rand<0.666667) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}
game()
