
function game(event) {
    //getting player and computer score from the span
    let playerScore = Number(document.querySelector('.playerScoreDisplay').innerText)
    let computerScore = Number(document.querySelector('.computerScoreDisplay').innerText)

    let playerSelection = event.target.innerText; //player slection from the button being clicked
    let computerSelection= getComputerChoice().toLowerCase()
    let win = checkWin(playerSelection.toLowerCase(),computerSelection.toLowerCase())

    if(win == 'player') {
        playerScore++
        document.querySelector('.playerScoreDisplay').innerText = playerScore
    }
    else if(win == 'computer') {
        computerScore++
        document.querySelector('.computerScoreDisplay').innerText = computerScore
    }
   
    console.log(`Player Score: ${playerScore} \n Computer Score: ${computerScore}`)     

    
    if(playerScore ==5) {
        document.querySelector('.result').innerText ="Final Result: player won"
        console.log("player won")
        allButtons.forEach(btn => btn.classList.toggle('hide'))

    }
    else if(computerScore ==5) {
        document.querySelector('.result').innerText ="Final Result: Computer won"
        console.log("Computer won")
        allButtons.forEach(btn => btn.classList.toggle('hide'))

    }
  
    
  }

function checkWin(playerSelection, computerSelection) { //checkWIn
    // your code here!
    if((playerSelection == 'rock'&& computerSelection == 'scissors') || (playerSelection == 'scissors'&& computerSelection == 'paper') || (playerSelection == 'paper'&& computerSelection == 'rock'))
    {   
        document.querySelector('.commentary').innerText = `You won this round!! ${playerSelection} beats ${computerSelection}`
        console.log(`You won this round!! ${playerSelection} beats ${computerSelection}`)
        return 'player'
    }
    else if(playerSelection == computerSelection) {
        document.querySelector('.commentary').innerText = `It's a draawww!!!`
        console.log(`It's a draawww!!!`)
        return 'draw'
    }
    else {
        document.querySelector('.commentary').innerText = `You lost this round!! ${computerSelection} beats ${playerSelection}`
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

    document.querySelector('.scores').classList.toggle('hide')


}

//reset the game 
document.querySelector('.resetGame').addEventListener('click',resetGame)

function resetGame(event) {
    document.querySelector('.startGame').classList.toggle('hide')
    document.querySelector('.resetGame').classList.toggle('hide')

    allButtons.forEach(btn => btn.classList.add('hide'))

    document.querySelector('.scores').classList.toggle('hide')

    //making scores 0
    document.querySelector('.playerScoreDisplay').innerText = 0
    document.querySelector('.computerScoreDisplay').innerText = 0

    //reseting commentary and results
    document.querySelector('.commentary').innerText = ""
    document.querySelector('.result').innerText = ""
    


}
