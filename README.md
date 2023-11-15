# Pali e Dispari

## Palindroma

This script will ask the user to insert a string and then determine, using a function, whether or not the string is a palindrome.

1. Use a prompt to ask the user to insert a word. Save it as a variable.  
2. Create a function.
3. Convert the word to lowercare to make the script case-insensitive.  
4. Define indices that start at the extremes of the word and move towards the center.
5. Use a while loop to check whether the characters corresponsing to the indices are always the same.  
6. Print the result of the check into the console.  

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