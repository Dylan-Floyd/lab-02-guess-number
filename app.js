// import functions and grab DOM elements
import { inputToNumber, checkGuess } from './utils.js';

const triesLeftSpan = document.getElementById('tries-left-span');
const hintSpan = document.getElementById('hint-span');
const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');
const resultH3 = document.getElementById('result-h3');
const playAgainButton = document.getElementById('play-again-button');

// initialize global state
let correctNumber = generateRandomNumber();
let triesLeft = 3;

function generateRandomNumber() {
    return Math.round(Math.random() * 10);
}

// set event listeners 
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
guessButton.addEventListener('click', () => {
    triesLeft--;
    triesLeftSpan.textContent = `You have ${triesLeft} tries remaining.`;

    let hintVal = checkGuess(inputToNumber(guessInput.value), correctNumber);
    let hintString = '';
    if (hintVal === -1) {
        hintString = 'low';
    } else if (hintVal === 0) {
        hintString = 'correct';
    } else {
        hintString = 'high';
    }
    hintSpan.textContent = `Your guess was ${hintString}`;

    if (hintVal === 0) {
        resultH3.textContent = 'You Won!';
        resultH3.style.visibility = 'visible';
        guessButton.style.display = 'none';
        playAgainButton.style.visibility = 'visible';
    } else {
        if (triesLeft === 0) {
            resultH3.textContent = 'You lost.';
            resultH3.style.visibility = 'visible';
            guessButton.style.display = 'none';
            playAgainButton.style.visibility = 'visible';
        } else {
            hintSpan.style.visibility = 'visible';
        }
    }
});

playAgainButton.addEventListener('click', () => {
    guessButton.style.display = 'block';
    playAgainButton.style.visibility = 'hidden';
    hintSpan.style.visibility = 'hidden';
    resultH3.style.visibility = 'hidden';
    correctNumber = generateRandomNumber();
    triesLeft = 3;
    triesLeftSpan.textContent = `You have ${triesLeft} tries remaining.`;
    guessInput.value = '';
});