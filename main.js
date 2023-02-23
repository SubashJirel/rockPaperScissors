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
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(checkWin(playerSelection, computerSelection));