
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
  console.log(playRound(playerSelection, computerSelection));