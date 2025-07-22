// ClassRoom:
// let input="Learn String and Function"
// Split word 
// print resever order
// then use loop to revese the words and print the output


// output : Function and String Learn
let input = "Learn String and Function";

function reverseWords(input) {
    // Split the input string into words
    let words = input.split(" ");
    
    // Reverse the array of words
    let reversedWords = words.reverse();
    
    // Join the reversed array back into a string
    let output = reversedWords.join(" ");
    
    // Print the output
    console.log(output);
}

function reverseUsingLoop(input) {
    // Split the input string into words
    let words = input.split(" ");       
    let reversed = "";
    // Loop through the words in reverse order
    for (let i = words.length - 1; i >= 0; i--)
    {
        // Append each word to the reversed string
        reversed += words[i] + " ";
    }
    // Print the reversed string
    console.log(reversed.trim());
}

reverseUsingLoop(input);

reverseWords(input);