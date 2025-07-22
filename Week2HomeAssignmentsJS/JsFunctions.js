/*Assignment Details:
Complete the following tasks to practice function declarations, arrow functions, anonymous
functions, and callback functions in JavaScript.
Assignment Requirements:

Task 1: Function Declaration
Create a function named `userProfile` that takes a `name` as a parameter and logs “Hello,
<name>!" to the console.

Task 2: Arrow Function
Create an arrow function named `double` that takes a number as a parameter and returns
double its value.

Task 3: Anonymous Function
Use an anonymous function with `setTimeout` to log `"This message is delayed by 2 seconds"`
after 2 seconds.

Task 4: Callback Function
Create a function named `getUserData` that takes a callback function as a parameter. Inside
`getUserData`, simulate fetching data with `setTimeout` and then call the callback function
with a user object after 3 seconds.
Call the `getUserData` function and log the user's name and age using the callback function.

Expected Outcome:
Upon completion, you should be able to:
- Understand how to declare and use different types of functions in JavaScript.
- Learn how to implement and use callback functions.
- Understand asynchronous operations using callbacks.
*/

// Task 1: Function Declaration
function userProfile(name) {
    console.log(`Hello, ${name}!`);
}   
// Test Task 1
userProfile("Alice");   
// Task 2: Arrow Function
const double = (num) => num * 2;
// Test Task 2
console.log(`Double of 5 is: ${double(5)}`);    
// Task 3: Anonymous Function with setTimeout
setTimeout(function() {
    console.log("This message is delayed by 2 seconds");
}, 2000);    
// Task 4: Callback Function
function getUserData(callback) {
    setTimeout(() => {
        const user = { name: "Bob", age: 30 };
        callback(user);
    }, 3000);
}
// Call getUserData and log user's name and age
getUserData((user) => {
    console.log(`User's Name: ${user.name}, Age: ${user.age}`);
});    
// Output the results of the tasks
console.log("All tasks completed.");
