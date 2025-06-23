/*
Assignment Requirements:
1. Create a function named that takes a number as a parameter.
2. Declare and initialize the variable.
3. Use a conditional statement to check if the number is greater than 0, to check if the number is less than 0,
and to handle the case when the number is zero.
4. Return the corresponding string value for each case.
5. Call the function and print the result.
Hints to Solve:
Use a conditional statement to check the number type. If the given number is greater than 0, it is a positive
number and if the given number is less than 0, it is a negative number. If the given number is 0, then the
number is neutral.
*/
let number = 10; // Example input number
let negativeNumber = -5; // Example negative input number
let zeroNumber = 0; // Example zero input number

function numberType(number) {
    if (number > 0) {
        return "Positive"; // Return "Positive" if the number is greater than 0
    } else if (number < 0) {
        return "Negative"; // Return "Negative" if the number is less than 0
    } else {
        return "Neutral"; // Return "Neutral" if the number is 0
    }

}
console.log(`The number ${number} is ${numberType(number)}`); // Print the result for positive number
console.log(`The number ${negativeNumber} is ${numberType(negativeNumber)}`); // Print the result for negative number
console.log(`The number ${zeroNumber} is ${numberType(zeroNumber)}`); // Print the result for zero number