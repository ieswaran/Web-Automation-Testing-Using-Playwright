/**
 * Assignment Requirements:
Create two functions : launchBrowser, runTests where,
 a) launchBrowser need to take input as browserName (string) and do not return any
 - use if-else (chrome or otherwise)
 - Print the value
 b) runTests need to take input as testType (string) and do not return any
 - use switch case (smoke, sanity, regression, default (smoke))
 - Print the values
Call that function from the javascript
Hints to Solve:
For `launchBrowser`, use `if-else` to check if `browserName` is "chrome" and print accordingly. For
`runTests`, use a `switch` statement to handle different `testType` values, including a default case.

 */

function launchBrowser(browserName) {
    if (browserName === "chrome") {
        console.log("Launching Chrome browser");
    } else {
        console.log(`Launching ${browserName} browser`);
    }
}

function runTests(testType) {
    switch (testType) {
        case "smoke":
            console.log("Running Smoke Tests");
            break;
        case "sanity":
            console.log("Running Sanity Tests");
            break;
        case "regression":
            console.log("Running Regression Tests");
            break;
        default:
            console.log("Running Default Smoke Tests");
    }
}

// Example calls
launchBrowser("chrome");    
launchBrowser("firefox");
runTests("smoke");
runTests("sanity");
runTests("regression");
runTests("unit"); 

