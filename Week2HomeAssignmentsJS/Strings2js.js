/**
 * Given a string s consisting of words and spaces, return the length of the last word in the string.
Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:
Input: s = " fly me to the moon "
Output: 4
Explanation: The last word is "moon" with length 4.
 */


function lengthOfLastWord(s) {
    // Trim the string to remove leading and trailing spaces
    s = s.trim();
    
    // Split the string into words using space as a delimiter
    const words = s.split(' ');
    
    // Return the length of the last word
    return words[words.length - 1].length;
}       
// Test cases
console.log(lengthOfLastWord("Hello World")); // Output: 5
console.log(lengthOfLastWord(" fly me to the moon ")); // Output: 4
console.log(lengthOfLastWord("   "));
console.log(lengthOfLastWord("SingleWord")); // Output: 10

function isAnagram(s, t) {
    // If lengths are not equal, they cannot be anagrams
    if (s.length !== t.length) return false;
    
    // Create a frequency map for characters in s
    const charCount = {};
    
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Check characters in t against the frequency map
    for (let char of t) {
        if (!charCount[char]) return false; // Character not found or count is zero
        charCount[char]--;
    }
    
    return true; // All characters matched
}
// Test cases
console.log("Anagram Tests:");
console.log(isAnagram("anagram", "nagaram")); // Output: true
console.log(isAnagram("rat", "car")); // Output: false
console.log(isAnagram("listen", "silent")); // Output: true
console.log(isAnagram("hello", "world")); // Output: false
console.log(isAnagram( 2,  2)); // Should throw an error or return false since inputs are not strings