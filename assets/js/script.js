/**
 * Setting up available answers for the user
 */

const answers = {
  Rock: {
    Rock: 'draw',
    Paper: 'win',
    Scissors: 'lose',
    Lizard: 'lose',
    Spock: 'win',
  },
  Paper: {
    Rock: 'lose',
    Paper: 'draw',
    Scissors: 'win',
    Lizard: 'win',
    Spock: 'lose',
  },
  Scissors: {
    Rock: 'win',
    Paper: 'lose',
    Scissors: 'draw',
    Lizard: 'lose',
    Spock: 'win',
  },
  Lizard: {
    Rock: 'win',
    Paper: 'lose',
    Scissors: 'win',
    Lizard: 'draw',
    Spock: 'lose',
  },
  Spock: {
    Rock: 'lose',
    Paper: 'win',
    Scissors: 'lose',
    Lizard: 'win',
    Spock: 'draw',
  }
};

/**
 * Getting the player's choice and the computer's 
 * choice, to determine the winner or if it's a draw
 */


// Setting the player's choice
function playerChoice(input) {
  const handOptions = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];

  // Setting the computer's choice using Math.random
  const randomNumber = Math.floor(Math.random() * 5);
  const computerChoice = handOptions[randomNumber];

  if (answers[computerChoice][input] === 'win') {
    alert(`You picked ${input}, the computer choce ${computerChoice}. You win!`);
    
  } else if (answers[computerChoice][input] === 'lose') {
    alert(`Uh oh, You picked ${input}, the computer choce ${computerChoice}. You lose!`);
    
  } else {
    alert(`It's a draw!! You picked both chose ${input}`);
  }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


