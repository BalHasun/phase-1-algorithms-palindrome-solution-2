function isPalindrome(word) {
  // Write your algorithm here

  // iterate from the beginning 
  for (let i = 0; i < word.length; i++) {
    let j = word.length - 1 - i

    // compare the letter we're iterating over to the corresponding letter at the end
    if (word[i] !== word[j])

      // if the letters don't match, return false
      return false
  }
  // if all the letters match, return true
  return true
}

/* 
  Add your pseudocode here

  iterate from the beginning of the string to the last of the string
  compare the letter we're iterating over to the corresponding letter at the end of the string
  if the letters don't match, return false

if all the letters match, return true
*/

/*
  Add written explanation of your solution here
  make an isPalindrome function that returns either true or false.
   When the input string is the same forwards and backwards, I should return true.
  That means if the first letter is the same as the last letter, and the second letter is the same as the second to last letter, the function should return true.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
