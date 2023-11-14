# Pali e Dispari

## Palindroma

This script will ask the user to insert a string and then determine, using a function, whether or not the string is a palindrome.

1. Use a prompt to ask the user to insert a string. Save it as a variable.  
2. Create a function.  
3. In the function initialize a variable corresponding to the argument in lowercase in order to make the checker case-insensitive.  
4. Perform the following operations on the variable: use the split() method to split the string into an array; use the reverse() method to reverse the the order of the array; use the join() method to join the elements of the array into a string again. This process inverts the given string.  
5. Use an if statement to compare the resulting string with the original argument. If the two match then the word is a palindrome. Return true. Otherwise return false.  
6. Finally, in an if condition outside the function, call the function with the user-entered string as its argument. If the function returned true then print a confirmation that the string is a palindrome. Otherwise, print that the the string is not a palindrome.

