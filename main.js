
function game(event) {
    let playerScore = 0
    let computerScore = 0
    while(playerScore<5 && computerScore<5) {
        let playerSelection = event.target.innerText;
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
        console.log(`You won this round!! ${playerSelection} beats ${computerSelection}`)
        return 'player'
    }
    else if(playerSelection == computerSelection) {
        console.log(`It's a draawww!!!`)
        return 'draw'
    }
    else {
        console.log(`You lost this round!! ${computerSelection} beats ${playerSelection}`)
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
// game()
const rock = document.querySelector('.rockButton')
const paper = document.querySelector('.paperButton')
const scissor = document.querySelector('.scissorButton')

rock.addEventListener('click',game)
paper.addEventListener('click',game)
scissor.addEventListener('click',game)

const allButtons = document.querySelectorAll('.allButtons')


//Starting the game at first
document.querySelector('.startGame').addEventListener('click',startGame)

function startGame(event) {
    document.querySelector('.resetGame').classList.toggle('hide')
    document.querySelector('.startGame').classList.toggle('hide')
    allButtons.forEach(btn => btn.classList.toggle('hide'))

}

//reset the game 
document.querySelector('.resetGame').addEventListener('click',resetGame)

function resetGame(event) {
    document.querySelector('.startGame').classList.toggle('hide')
    document.querySelector('.resetGame').classList.toggle('hide')
    allButtons.forEach(btn => btn.classList.toggle('hide'))


}
