let actions = ['Rock', 'Paper', 'Scissors'];
let computerPlay = () => actions[Math.floor(Math.random() * actions.length)];

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay().toLowerCase();
  playerSelection = window.prompt('Choose Rock, Paper or Scissors').toLowerCase();
  if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
      (playerSelection == 'paper' && computerSelection == 'rock') ||
      (playerSelection == 'scissors' && computerSelection == 'paper')){
    return 'You win';
  } else {
    return 'You lose'
  }
  }

function game() {
  for (let index = 0; index < 5; index++) {
    console.log(playRound());
  }
}

