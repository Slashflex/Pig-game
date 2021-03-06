/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
- You can now specify your own winning score, if not set, 100 will be set by default.
*/

var scores, roundScore, activePlayer, gamePlaying;

init();

document.querySelector('.btn__roll').addEventListener('click', function () {
    
    if (gamePlaying) {
        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;

        // 2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'img/dice-' + dice + '.png';

        // 3. Update roundScore IF the rolled dice was not a 1
        if (dice !== 1) {
            // Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            // Next Player
            setTimeout(nextPlayer, 800);
        }
    }
});

document.querySelector('.btn__hold').addEventListener('click', function () {

    if (gamePlaying) { 
        // 1. Add current score to Global score
        scores[activePlayer] += roundScore;

        // 2. Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        var input = document.querySelector('.final-score').value;
        var winningScore;
        
        // Undefined, 0, null or "" are COERCED to false
        // Anything else is COERCED to true
        if(input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }

        // 3. Check if player won the game
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.wrapper__player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.wrapper__player-' + activePlayer + '-panel').classList.remove('wrapper__active');
            displayOrNot(winningScore);
            gamePlaying = false;
        } else {
            // Next Player
            setTimeout(nextPlayer, 200);
        }
    }
});

function displayOrNot(winningScore) {
    if (scores[activePlayer] >= winningScore) {
        document.querySelector('.btn__roll').style.display = 'none';
        document.querySelector('.btn__hold').style.display = 'none';
        document.querySelector('.final-score').style.display = 'none';
        document.querySelector('.form__label').style.display = 'none';
    } else {
        document.querySelector('.btn__roll').style.display = 'block';
        document.querySelector('.btn__hold').style.display = 'block';
        document.querySelector('.final-score').style.display = 'block';
        document.querySelector('.form__label').style.display = 'block';
    }
}

// Next player's turn
function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.wrapper__player-0-panel').classList.toggle('wrapper__active');
    document.querySelector('.wrapper__player-1-panel').classList.toggle('wrapper__active');
    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn__new').addEventListener('click', init);

// Game initialization
function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.wrapper__player-0-panel').classList.remove('winner');
    document.querySelector('.wrapper__player-1-panel').classList.remove('winner');
    document.querySelector('.wrapper__player-0-panel').classList.remove('wrapper__active');
    document.querySelector('.wrapper__player-1-panel').classList.remove('wrapper__active');
    document.querySelector('.wrapper__player-0-panel').classList.add('wrapper__active');
    document.querySelector('.btn__roll').style.display = 'block';
    document.querySelector('.btn__hold').style.display = 'block';
}