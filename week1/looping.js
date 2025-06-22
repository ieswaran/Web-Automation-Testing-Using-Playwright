let input = 30;
console.log("Odd numbers from 0 to " + input + ":");
for (let i = 0; i <= input; i++) {
  if (i % 2 !=0) {
    console.log( i);
  }
}

// This code will print all odd numbers from 0 to 30
// The loop iterates from 0 to the value of 'input' (30), and       
// the if condition checks if the number is odd by using the modulus operator (%).
// If the number is odd (i.e., i % 2 !== 0), it
// prints the number to the console. The output will be all odd numbers in that range.
// Example output: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29
// Note: The loop uses 'let' for the loop variable 'i', which is block-scoped.
// This means 'i' is only accessible within the loop block, preventing any potential conflicts with
