/* Assignment Details:
Write a JavaScript function named `isOddOrEven` that takes an integer as input and returns `Odd` if the
number is odd and `"Even"` if the number is even.
Assignment Requirements:
1. Create a function named `isOddOrEven` that takes a number as a parameter
2. Declare and initialize the variable
3. Use a conditional statement to check if the number is divisible by 2
4. Call the function and print the result
5. Use console.log to print the result
*/
let number = 5; // Example input number

function isOddOrEven(number) {
    // Check if the number is divisible by 2
    if (number % 2 === 0) {
        return "Even"; // Return "Even" if the number is even
    } else {
        return "Odd"; // Return "Odd" if the number is odd
    }
}

console.log(`The number ${number} is ${isOddOrEven(number)}`); // Print the result