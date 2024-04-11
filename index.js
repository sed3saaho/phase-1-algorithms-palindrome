function isPalindrome(word) {
    
    for (let i = 0; i < word.length / 2; i++) {
      
      const j = word.length - 1 - i;
      
      if (word[i] !== word[j]) return false;
    }
  
  
    return true;

}

/* 
  Add your pseudocode here
*/
/*Pseudocode:
  1. Define a function called isPalindrome that takes a word as input.
  2. Initialize a loop to iterate over the first half of the word.
  3. Compare characters from the start and end of the word.
  4. If any characters are not equal, return false.
  5. If all characters match, return true to indicate the word is a palindrome.


/*
  Add written explanation of your solution here
*/
/*
  Written explanation:
  The isPalindrome function checks if a given word is a palindrome by comparing characters from the start and end of the word, moving towards the center.
  If any characters do not match, the function returns false, indicating the word is not a palindrome.
  If all characters match, the function returns true, signifying that the word is a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  
  console.log("Custom Test Cases:");

  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("level"));

  
  console.log("");
  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello"));

  
  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
