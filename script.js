'use strict';
//Create functional game variables
//Generate random number
//manipulate DOM
//read from DOM
//change CSS styles
//Only declaring variables, no need to define
var scores, roundScore, activePlayer, gamePlaying;
init();

document.getElementById('score--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('current--0').textContent = '0';
document.getElementById('current--0').textContent = '0';
// console.log(dice);
//Get element with id current + activePlayer position(0,1) , change it's text to dice random method
//Setter, set a value
// document.querySelector('#current--' + activePlayer).textContent = dice;
// document.querySelector('#current--' + activePlayer).innerHTML =
//   '<em>' + dice + '</em>';

//Getter, get a value
var x = document.querySelector('#score--0').textContent;

console.log(x);
//change css by class, using style method

document.querySelector('.dice').style.display = 'none';

//Next player, change Active class
function nextPlayer() {
  //Next Player
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;
  document.getElementById('current--0').textContent = '0';
  document.getElementById('current--1').textContent = '0';
  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');
  document.querySelector('.dice').style.display = 'none';
}
//setup event handles
//callback function
//anonymous function
//select elements by ID
//change image in <img> element

// function btn() {
//     //Do Something here

// }
//two arguments in addEventListener, first the event
//no need to add (), we want EL to call it, and not to be automatically
//anonymous function with no name, can not be reused outside this context
document.querySelector('.btn--roll').addEventListener('click', function () {
  if (gamePlaying) {
    var dice = Math.floor(Math.random() * 6) + 1;
    //2. display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    //3.update the round score IF the rolled number is not a 1
    if (dice !== 1) {
      //Addscore
      roundScore += dice;
      document.querySelector(
        '#current--' + activePlayer
      ).textContent = roundScore;
    } else {
      //Next Player
      nextPlayer();
      // document.querySelector('#current--' + activePlayer).textContent = '0';
    }
  }
  //1. a random number as soon as someone clicks
});

//use function correctly to apply DRY
//Think about game logic as a programer
document.querySelector('.btn--hold').addEventListener('click', function () {
  if (gamePlaying) {
    //Add player current score to golabl score
    scores[activePlayer] += roundScore;

    //update UI
    document.querySelector('#score--' + activePlayer).textContent =
      scores[activePlayer];

    //check if player won the game
    if (scores[activePlayer] >= 20) {
      document.querySelector('#name--' + activePlayer).textContent = 'Winner';
      document.querySelector('.dice').style.display = 'none';
      document
        .querySelector('.player--' + activePlayer)
        .classList.add('player--winner');
      document
        .querySelector('.player--' + activePlayer)
        .classList.remove('player--active');
      gamePlaying = false;
    } else {
      //next player
      nextPlayer();
    }
  }
});

//New Game
document.querySelector('.btn--new').addEventListener('click', init);

//Init. the game, reset everything
function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;
  document.querySelector('.dice').style.display = ' none';
  document.getElementById('score--0').textContent = '0';
  document.getElementById('score--1').textContent = '0';
  document.getElementById('current--0').textContent = '0';
  document.getElementById('current--1').textContent = '0';
  document.getElementById('name--0').textContent = 'Player 1';
  document.getElementById('name--1').textContent = 'Player 2';
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
  document.querySelector('.player--0').classList.remove('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
  document.querySelector('.player--0').classList.add('player--active');
}
