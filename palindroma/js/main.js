'use strict';

// Create a function with a while loop to check whether the argument is a palindrome
function palindromeChecker(word) {
    if (word === '') return false;
    if (word.length === 1) return true;
    const lowerWord = word.toLowerCase();
    let left = 0;
    let right = lowerWord.length - 1;
    while (left < right) {
        if (lowerWord[left] !== lowerWord[right]) return false;
        left++;
        right--;
    }
    return true;
}

const enteredWord = prompt('Please enter a word'); // Save user string as variable

// Print the result of the check
if (palindromeChecker(enteredWord) === true) {
    console.log(`"${enteredWord}" is a palindrome!`);
} else {
    console.log(`"${enteredWord}" is NOT a palindrome.`);
}