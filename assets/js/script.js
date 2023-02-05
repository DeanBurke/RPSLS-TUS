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


