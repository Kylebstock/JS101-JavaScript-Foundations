//Write a function that returns true if the string passed as an argument is a palindrome, 
//or false otherwise. A palindrome reads the same forwards and backwards.
//For this problem, case-insensitive, and should ignore all non-alphanumeric characters.

/*
input: string
output: booloan true/false

rules: 
  explicit rules:
    - must return either true or false if string is a palindom
    - case insensitive: upper and lower dont matter
    - all non-characters should be removed: symbols, numbers, etc.

  implicit rules:
    - empty strings should return false
    - all inputs will be strings

algarithom:
since all characters and cases matter, we can reverse the string and compare to see if its ===
  function isPalindrom = (string) => 
    start newString = string.reverse
    if newString === string return true, else false

*/

let isRealPalindrome = (string) => {
  let cleanString = string.toLowerCase().replace(/\s+/g, "").replace(/[^a-z0-9]+/gi, "");
  let newString = cleanString.split("").reverse().join('');
  return cleanString === newString ? true : false;
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false

let isPalindromicNumber = numbers => {
  let newNumbers = numbers.toString();
  console.log(newNumbers);
  let reverseNumbers = newNumbers.split().reverse().join('');
  console.log(reverseNumbers);
  return newNumbers === reverseNumbers ? true : false;
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true