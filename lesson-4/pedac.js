// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes. Consider
// palindrome words case sensitive.

// Test cases:

// console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// should return: ["ili"]
//
// console.log(palindromeSubstrings("abcddcbA"))
// should return: ["bcddcb", "cddc", "dd"]
//
// console.log(palindromeSubstrings("palindrome"))
// should log: []
//
// console.log(palindromeSubstrings(""))
// should log: []

//input: string
//output: sub string of input (as array)
//rules:
//   explicit requirements:
//        - every palindome (word that reads the same forwards or backwards) and palindome 'section'
//          must be returned as substring array, i.e., mom, or race car, or "pp" of happy.
//        - palindomes will be case sensative
//   implicit requirements:
//        - empty strings will return empty array
//        - no palindrum strings will return empty array
//        - all imputs will be valid strings