export function inputToNumber(userInput) {
    let number = Number(userInput);
    if (isNaN(number)) {
        throw 'User input is not a number.';
    }
    return number;
}

export function checkGuess(guess, correctNumber) {
    if (typeof guess !== 'number' || typeof correctNumber !== 'number') {
        throw 'checkGuess requires two Number arguments';
    }
    if (guess > correctNumber) {
        return 1;
    } else if (guess < correctNumber) {
        return -1;
    }
    //else:
    return 0;
}