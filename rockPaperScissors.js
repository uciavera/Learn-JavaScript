//get user choice
const getUserChoice = userInput => {
 userInput = userInput.toLowerCase();
  if (userInput === 'rock'|| userInput === 'paper' || userInput ==='scissors'){
    return userInput;
  }else{
    console.log('error! please insert rock, paper or scissors');
    }
}
//testing
//console.log(getUserChoice('Paper'));
//console.log(getUserChoice('phone'));
//get computer choice
const getComputerChoice=() => {
  const randomNumber = Math.floor(Math.random()*3);
  switch (randomNumber){
    case 0:
    return 'rock';
    case 1:
    return 'paper';
    case 2: 
    return 'scissor';
  }
}
//console.log(getComputerChoice());
//determine winner
const determineWinner = (userChoice, computerChoice) =>{
if(userChoice === computerChoice){
  return 'the game is a tie!';
}
if (userChoice === 'rock') {
  if (computerChoice === 'paper') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
};
if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
};
if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
};
};
//testing
console.log(determineWinner('paper','scissors'));
const playGame =()=>{
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  
  console.log('Your choice: '+ userChoice);
  console.log("computer's choice: "+ computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
  
};
playGame();

