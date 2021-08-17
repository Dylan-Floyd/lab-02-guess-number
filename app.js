// import functions and grab DOM elements
import { inputToNumber, checkGuess } from './utils.js';

const triesLeftSpan = document.getElementById('tries-left-span');
const hintSpan = document.getElementById('hint-span');
const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');
const resultH3 = document.getElementById('result-h3');
const playAgainButton = document.getElementById('play-again-button');
const winsSpan = document.getElementById('wins-span');
const lossesSpan = document.getElementById('losses-span');

// functions needed for initializing state
function generateRandomNumber() {
    return Math.round(Math.random() * 10);
}

const updateTriesLeftSpan = () => {
    triesLeftSpan.textContent = `You have ${triesLeft} tries remaining.`;
};

const updateWinsAndLosses = () => {
    localStorage.setItem('wins', wins);
    localStorage.setItem('losses', losses);
    winsSpan.textContent = `Wins: ${wins}`;
    lossesSpan.textContent = `Losses: ${losses}`;
};

const initializeGame = () => {
    guessButton.style.display = 'block';
    playAgainButton.style.visibility = 'hidden';
    hintSpan.style.visibility = 'hidden';
    resultH3.style.visibility = 'hidden';
    correctNumber = generateRandomNumber();
    triesLeft = 3;
    updateTriesLeftSpan();
    try {
        wins = inputToNumber(localStorage.getItem('wins'));
    } catch (error) {
        wins = 0;
    }
    try {
        losses = inputToNumber(localStorage.getItem('losses'));
    } catch (error) {
        losses = 0;
    }
    updateWinsAndLosses();
};

// initialize global state
let correctNumber;
let triesLeft;
let wins;
let losses;
initializeGame();


const endGame = userDidWin => {
    let resultString = 'You Lost.';
    if (userDidWin) {
        resultString = 'You Won!';
        wins++;
    } else {
        losses++;
    }
    updateWinsAndLosses();
    resultH3.textContent = resultString;
    resultH3.style.visibility = 'visible';
    guessButton.style.display = 'none';
    playAgainButton.style.visibility = 'visible';
};

const updateHintSpan = hintVal => {
    let hintString = '';
    if (hintVal === -1) {
        hintString = 'low';
    } else if (hintVal === 0) {
        hintString = 'correct';
    } else {
        hintString = 'high';
    }
    hintSpan.textContent = `Your guess was ${hintString}`;
};

const handleNewGuess = () => {
    triesLeft--;
    updateTriesLeftSpan();

    let hintVal = checkGuess(inputToNumber(guessInput.value), correctNumber);
    guessInput.value = '';
    updateHintSpan(hintVal);

    if (hintVal === 0) {
        endGame(true);
    } else {
        if (triesLeft === 0) {
            endGame(false);
        } else {
            hintSpan.style.visibility = 'visible';
        }
    }
};

// set event listeners 
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
guessButton.addEventListener('click', handleNewGuess);
guessInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        handleNewGuess();
    }
});

playAgainButton.addEventListener('click', () => {
    initializeGame();
});