'use strict';

// Random integer generator
function randomInt(lower, upper, inclusive) {
    if (inclusive) {
        return Math.floor(Math.random() * (upper - lower + 1)) + lower;
    } else {
        return Math.floor(Math.random() * (upper - lower - 1)) + lower + 1;
    }
}

// Divisibility checker
function isDivisibleBy(number, divisor) {
    return number % divisor === 0;
}

// Result generator
function outputResult(userNumber, computerNumber, sum, userChoice, result) {
    console.log(`Your number: ${userNumber}`);
    console.log(`Computer number: ${computerNumber}`);
    console.log(`Result: ${sum}. You picked ${userChoice}. The sum is ${sum % 2 === 0 ? 'even' : 'odd'}. You ${result}.`);
}

// Ask the user to input "even" or "odd"
const userChoice = prompt('Please enter "even" or "odd"').toLowerCase();
// Ask the user to enter an integer between 1 and 5
const userNumber = parseInt(prompt('Enter an integer between 1 and 5'));

// Check for input errors
if (isNaN(userNumber) || userNumber < 1 || userNumber > 5 || (userChoice !== ('even') && userChoice !== ('odd'))) {
    alert('Invalid input. Please enter "even" or "odd" in the first prompt and a number between 1 and 5 in the second.');
} else {
    //Generate computer number
    const computerNumber = randomInt(1, 5, true);
    // Generate sum
    const sum = userNumber + computerNumber;
    // Result
    if (isDivisibleBy(sum, 2) && userChoice === 'even') {
        outputResult(userNumber, computerNumber, sum, userChoice, "WIN");
    } else if (isDivisibleBy(sum, 2) && userChoice !== 'even') {
        outputResult(userNumber, computerNumber, sum, userChoice, "lose");
    } else if (!isDivisibleBy(sum, 2) && userChoice === 'odd') {
        outputResult(userNumber, computerNumber, sum, userChoice, "WIN");
    } else if (!isDivisibleBy(sum, 2) && userChoice !== 'odd') {
        outputResult(userNumber, computerNumber, sum, userChoice, "lose");
    }
}