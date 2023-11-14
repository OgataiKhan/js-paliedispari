# Pali e Dispari

## Palindroma

This script will ask the user to insert a string and then determine, using a function, whether or not the string is a palindrome.

1. Use a prompt to ask the user to insert a string. Save it as a variable.  
2. Create a function.  
3. In the function initialize a variable corresponding to the argument in lowercase in order to make the checker case-insensitive.  
4. Perform the following operations on the variable: use the split() method to split the string into an array; use the reverse() method to reverse the the order of the array; use the join() method to join the elements of the array into a string again. This process inverts the given string.  
5. Use an if statement to compare the resulting string with the original argument. If the two match then the word is a palindrome. Return true. Otherwise return false.  
6. Finally, in an if condition outside the function, call the function with the user-entered string as its argument. If the function returned true then print a confirmation that the string is a palindrome. Otherwise, print that the the string is not a palindrome.

## Pari e Dispari

This script will ask the user to choose between "even" and "odd". It will then ask the user to enter an integer between 1 and 5 and add it to a randomly generated integer between 1 and 5 representing the "computer".  
The user wins if they guessed correctly whether the sum of the two numbers is even or odd.

1. Ask the user to choose between "even" and "odd" with a prompt. Save the result as a variable. Use the toLowerCase() method to avoid case-sensitivity issues.  
2. Ask the user to enter an integer between 1 and 5. Use parseInt() to convert a potential decimal number to an integer.
3. Add an if condition that generates an error alert if the user's input is not a valid number.  
4. Use a function to generate a random number. The function takes three arguments: the lower limit, the upper limit, and a boolean value: true will include the two extremes, false will exclude them. Place the function near the beginning of the code to follow best practices.
5. Call the function to generate the computer number. Save the result as a variable.  
6. Add the two numbers together. Save the result as a variable.  
7. Create a function to determine whether a certain number is divisible by a certain divisor. Place the function near the beginning of the code.  
8. Call that function to determine whether the sum of the two numbers is divisible by 2.
9. Create a function to simplify result generation.  
10. Output the entered data, the computer number, and the result of the game into the console.