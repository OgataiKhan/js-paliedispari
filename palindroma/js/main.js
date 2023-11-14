'use strict';

const enteredWord = prompt('Please enter a word'); // Save user string as variable

function palindromeChecker (word) {
    const lowerCaseWord = word.toLowerCase(); // Make argument lowercase
    // Return true if the argument is a palindrome, otherwise return false
    if (lowerCaseWord === lowerCaseWord.split("").reverse().join("")) {
        return true;
    }
    return false;
}

// Print the result of the check
if (palindromeChecker(enteredWord) === true) {
    console.log(`"${enteredWord}" is a palindrome!`);
} else {
    console.log(`"${enteredWord}" is NOT a palindrome.`);
}