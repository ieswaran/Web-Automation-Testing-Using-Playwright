// Assignment Requirements:  
// 1. Declare a const name as browserVersion (global) 
// 2. Assign value as Chrome 
// 3. Create a function by name getBrowserVersion 
// 4. Create if condition inside function to check if browser is chrome, then 
// 5. Declare a local variable (browserVersion) and print that variable inside function (outside block) 
// 6. Call that function from the javascript 
 
// Hints to Solve:  - Use 'var' first as block variable and then convert that as 'let' - Confirm how it works 

const browserVersion= "Chrome"; // Global constant
function getBrowserVersion() {
    let browserVersion = "Firefox"; // Local variable (overrides global in this scope)
    if (browserVersion === "Chrome") {
        console.log("Browser Version inside function:", browserVersion); // Print local variable
    }
    console.log("Browser Version outside if block:", browserVersion); // Print local variable
}
// Call the function to execute it
getBrowserVersion(); // This will print "Browser Version inside function: Chrome"