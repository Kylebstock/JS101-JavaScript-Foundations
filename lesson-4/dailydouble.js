//Write a function that takes a string argument 
//and returns a new string that contains the value of the original string 
//with all consecutive duplicate characters collapsed into a single character.

//input: stings
//output: new string

let crunch = str => {
  let newStr = '';

  for (let index = 0; index < str.length; index ++) {
    if (str[index] === str[index] + 1) {
      newStr.push(str[index]);
    }
  }
  return newStr;
}


console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""