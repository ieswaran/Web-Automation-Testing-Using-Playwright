/**
 * Assignment Requirements:
1. Create a function that takes a student's score as a parameter.
2. Declare and initialize the variable.
3. Use `switch` statement inside the function.
4. Return the corresponding grade.
5. Call the function and print the result.
Hints to Solve:
Use a `switch` statement with `true` for score range checks to assign grades
 */
let score = 85; // Example input score
function getGrade(score) {
    let grade;
    switch (true) {
        case (score >= 90 && score <= 100):
            grade = "A";
            break;
        case (score >= 80 && score < 90):
            grade = "B";
            break;
        case (score >= 70 && score < 80):
            grade = "C";
            break;
        case (score >= 60 && score < 70):
            grade = "D";
            break;
        case (score < 60 && score >= 0):
            grade = "F";
            break;
        default:
            grade = "Invalid Score"; // Handle invalid scores
    }
    return grade;
}

// Example call to the function and print the result
console.log(`The grade for a score of ${score} is: ${getGrade(score)}`); // Print the result
console.log(`The grade for a score of 95 is: ${getGrade(95)}`); // Print the result for another score

console.log(`The grade for a score of 75 is: ${getGrade(75)}`); // Print the result for another score
console.log(`The grade for a score of 50 is: ${getGrade(50)}`); // Print the result for another score
console.log(`The grade for a score of -10 is: ${getGrade(-10)}`); // Print the result for an invalid score
console.log(`The grade for a score of 105 is: ${getGrade(105)}`); // Print the result for an invalid score
