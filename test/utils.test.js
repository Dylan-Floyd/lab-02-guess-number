import { inputToNumber, checkGuess } from '../utils.js';

const test = QUnit.test;


//inputToNumber tests:
test('inputToNumber converts "3" to 3', expect => {
    let expected = 3;
    let actual = inputToNumber('3');
    expect.equal(actual, expected);
});

test('inputToNumber throws an error when given "apple"', assert => {
    assert.throws(() => { inputToNumber('apple'); });
});


//checkGuess tests:
test('checkGuess returns 0 when guess is 1 and correctNumber is 1', assert => {
    let expected = 0;
    let actual = checkGuess(1, 1);
    assert.equal(actual, expected);
});

test('checkGuess returns -1 when guess is 0 and correctNumber is 2', assert => {
    let expected = -1;
    let actual = checkGuess(0, 2);
    assert.equal(actual, expected);
});

test('checkGuess returns 1 when guess is 2 and correctNumber is 0', assert => {
    let expected = 1;
    let actual = checkGuess(2, 0);
    assert.equal(actual, expected);
});

test('checkGuess throws an error when given no arguments', assert => {
    assert.throws(() => { checkGuess(); });
});

test('checkGuess throws an error when given one argument', assert => {
    assert.throws(() => { checkGuess(1); });
});

test('checkGuess throws an error when given a string and a number', assert => {
    assert.throws(() => { checkGuess('apple', 1); });
});

test('checkGuess throws an error when given a number and a string', assert => {
    assert.throws(() => { checkGuess(1, 'apple'); });
});