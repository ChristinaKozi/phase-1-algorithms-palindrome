function isPalindrome(word) {
  // Write your algorithm here
  let index = word.length-1
  for (const char in word) {
    if (word.charAt(char) === word.charAt(index)){
      index = index-1
      return true
      }
    else {
      return false
    }
  }
}

/* 
initialize constants for first and last indexs
  check if each first letter matches the last letter, if second letter matches second to last letter.. etc.
    if palindrome
      return true
    if not palindrome
      return false
*/

/*
-Function initializes the index the last letter
-It iterates over the string of (word) with a for loop
-Checks if the first character of that word equals the last letter
-If true, it decreases in index number by 1 and when the loop continues, the char variable is 
automatically updated to the next character in the string.
-If function does not find equal characters, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log('=>', isPalindrome('madam'));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
