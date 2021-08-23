//Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.
//You may assume that every word contains at least one letter, and that the string will always contain at least one word.
//You may also assume that each string contains nothing but words and spaces, 
//and that there are no leading, trailing, or repeated spaces.

//input: string
//output: string
//convert string to array
//slice first and last index of array
//rejoin array with last index forst and first index last


let swap = string => {
  let words = string.split(' ');

  words = words.map(word => {
      word = word.split('');
      let firstLetter = word[0];
      let lastLetter = word[word.length - 1];
      word[0] = lastLetter;
      word[word.length - 1] = firstLetter
    
      return word.join('');
  })
  return words.join(' ');
};

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
